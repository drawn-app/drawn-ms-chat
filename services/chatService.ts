import { sendUnaryData, ServerUnaryCall, ServerWritableStream, status } from "@grpc/grpc-js"
import { db } from "../utils/db"
import { dateToTimestamp } from "../utils/dataConverter"
import { RoomRequest__Output } from "../proto/generatedTypes/chat/RoomRequest"
import { MessageList } from "../proto/generatedTypes/chat/MessageList"
import { Empty } from "../proto/generatedTypes/chat/Empty"
import { MessageRequest__Output } from "../proto/generatedTypes/chat/MessageRequest"
import chatManager from "../data/chatManager"
import { ReceiveMessageResponse } from "../proto/generatedTypes/chat/ReceiveMessageResponse"
import { UpdateMessageRequest__Output } from "../proto/generatedTypes/chat/UpdateMessageRequest"
import { DeleteMessageRequest__Output } from "../proto/generatedTypes/chat/DeleteMessageRequest"

export async function GetMessages(call: ServerUnaryCall<RoomRequest__Output, MessageList>, callback: sendUnaryData<MessageList>) {
    console.log('GetMessages called with', call.request)
    const userId = (call.metadata.get('x-id').length > 0) ? call.metadata.get('x-id')[0] : null
    const role = (call.metadata.get('x-role').length > 0) ? call.metadata.get('x-role')[0] : null

    // Validate request
    if (!userId || !role) {
        callback({
            code: status.UNAUTHENTICATED,
            message: 'User not authenticated'
        })
        return
    }

    if (!call.request.workspaceId) {
        callback({
            code: status.INVALID_ARGUMENT,
            message: 'workspaceId is required'
        })
        return
    }

    // TODO: check permission to join chat (fetch workspace mangement service)


    // Find all messages for this workspace
    const messages = await db.message.findMany({
        where: {
            workspaceId: call.request.workspaceId
        },
        orderBy: {
            createdAt: 'asc'
        },
    })

    callback(null, { messages: messages.map((message) => ({...message, createdAt: dateToTimestamp(message.createdAt), updatedAt: dateToTimestamp(message.updatedAt)})) })
}

export async function SendMessage(call: ServerUnaryCall<MessageRequest__Output, Empty>, callback: sendUnaryData<Empty>) {
    console.log('SendMessage called with', call.request)

    // Validate request

    if (!call.request.userId) {
        callback({
            code: status.INVALID_ARGUMENT,
            message: 'userId is required'
        })
        return
    }

    if (!call.request.workspaceId) {
        callback({
            code: status.INVALID_ARGUMENT,
            message: 'workspaceId is required'
        })
        return
    }

    if (!call.request.text) {
        callback({
            code: status.INVALID_ARGUMENT,
            message: 'text is required'
        })
        return
    }

    // Create chat message
    const message = await db.message.create({
        data: {
            userId: call.request.userId,
            workspaceId: call.request.workspaceId,
            text: call.request.text,
        }
    })

    // Broadcast message to all users in the workspace
    chatManager.broadcastMessage(call.request.workspaceId, call.request.userId, message, 'CREATE')

    callback(null, {})
}

export async function ReceiveMessages(call: ServerWritableStream<RoomRequest__Output, ReceiveMessageResponse>) {
    console.log('ReceiveMessages called with', call.request)
    const userId = (call.metadata.get('x-id').length > 0) ? call.metadata.get('x-id')[0] : null
    const role = (call.metadata.get('x-role').length > 0) ? call.metadata.get('x-role')[0] : null

    // Validate request
    if (!userId || !role) {
        call.emit('error', {
            code: status.INVALID_ARGUMENT,
            message: 'userId is required'
        })
        return
    }

    if (!call.request.workspaceId) {
        call.emit('error', {
            code: status.INVALID_ARGUMENT,
            message: 'workspaceId is required'
        })
        return
    }

    call.on('cancelled', () => {
        console.log('Stream cancelled', call.request)
        chatManager.removeSession(call.request.workspaceId || -1, userId.toString() || "")
    })

    call.on('error', function(e) {
        console.log('Stream error', call.request)
        chatManager.removeSession(call.request.workspaceId || -1, userId.toString() || "")
    });

    chatManager.addSession(call.request.workspaceId, userId.toString(), call)

}

export async function UpdateMessage(call: ServerUnaryCall<UpdateMessageRequest__Output, Empty>, callback: sendUnaryData<Empty>) {
    console.log('UpdateMessage called with', call.request)

    // Validate request
    if (!call.request.id) {
        callback({
            code: status.INVALID_ARGUMENT,
            message: 'id is required'
        })
        return
    }

    if (!call.request.text) {
        callback({
            code: status.INVALID_ARGUMENT,
            message: 'text is required'
        })
        return
    }

    // Update chat message
    try {
        const message = await db.message.update({
            where: {
                id: call.request.id
            },
            data: {
                text: call.request.text
            }
        })

        // Broadcast message to all users in the workspace
        chatManager.broadcastMessage(message.workspaceId, message.userId, message, 'UPDATE')
    } catch (err) {
        callback({
            code: status.NOT_FOUND,
            message: 'Message not found'
        })
        return
    }
    
    callback(null, {})
}

export async function DeleteMessage(call: ServerUnaryCall<DeleteMessageRequest__Output, Empty>, callback: sendUnaryData<Empty>) {
    console.log('DeleteMessage called with', call.request)

    // Validate request
    if (!call.request.id) {
        callback({
            code: status.INVALID_ARGUMENT,
            message: 'id is required'
        })
        return
    }

    // Delete chat message
    try {
        const message = await db.message.delete({
            where: {
                id: call.request.id
            }
        })
    
        // Broadcast message to all users in the workspace
        chatManager.broadcastMessage(message.workspaceId, message.userId, message, 'DELETE')
    } catch (err) {
        callback({
            code: status.NOT_FOUND,
            message: 'Message not found'
        })
        return
    }
    
    callback(null, {})
}