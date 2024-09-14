import { sendUnaryData, ServerUnaryCall, status } from "@grpc/grpc-js"
import { db } from "../utils/db"
import { dateToTimestamp } from "../utils/dataConverter"
import { RoomRequest__Output } from "../proto/generatedTypes/chat/RoomRequest"
import { MessageList } from "../proto/generatedTypes/chat/MessageList"

export async function GetMessages(call: ServerUnaryCall<RoomRequest__Output, MessageList>, callback: sendUnaryData<MessageList>) {
    console.log('GetMessages called with', call.request)

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

    callback(null, { messages: messages.map((message) => ({...message, createdAt: dateToTimestamp(message.createdAt)})) })
}