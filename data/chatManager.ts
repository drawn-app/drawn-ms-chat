import { ServerWritableStream } from "@grpc/grpc-js";
import { RoomRequest__Output } from "../proto/generatedTypes/chat/RoomRequest";
import { Message } from "@prisma/client";
import { dateToTimestamp } from "../utils/dataConverter";
import { ReceiveMessageResponse } from "../proto/generatedTypes/chat/ReceiveMessageResponse";

class ChatManager {
    private chats: Map<number, Map<string, ServerWritableStream<RoomRequest__Output, ReceiveMessageResponse>>> = new Map<number, Map<string, ServerWritableStream<RoomRequest__Output, ReceiveMessageResponse>>>();
    private static _instance: ChatManager

    private constructor() {}

    public static get instance(): ChatManager {
        if (!ChatManager._instance) {
            ChatManager._instance = new ChatManager()
        }
        return ChatManager._instance
    }

    public addSession(workspaceId: number, userId: string, stream: ServerWritableStream<RoomRequest__Output, ReceiveMessageResponse>) {
        if (!this.chats.has(workspaceId)) {
            this.chats.set(workspaceId, new Map<string, ServerWritableStream<RoomRequest__Output, ReceiveMessageResponse>>())
        }
        this.chats.get(workspaceId)?.set(userId, stream)
    }

    public removeSession(workspaceId: number, userId: string) {
        if (!this.chats.has(workspaceId)) return
        this.chats.get(workspaceId)?.delete(userId)
        if (this.chats.get(workspaceId)?.size === 0) {
            this.chats.delete(workspaceId)
        }
    }

    public broadcastMessage(workspaceId: number, senderId: string, message: Message, action: 'CREATE' | 'UPDATE' | 'DELETE') {
        const receiveMessageResponse: ReceiveMessageResponse = {
            action: action,
            message: {
                id: message.id,
                userId: message.userId,
                workspaceId: message.workspaceId,
                text: message.text,
                createdAt: dateToTimestamp(message.createdAt),
                updatedAt: dateToTimestamp(message.updatedAt)
            }
        }
        if (!this.chats.has(workspaceId)) return
        this.chats.get(workspaceId)?.forEach((stream, userId) => {
            if (userId === senderId) return
            stream.write(receiveMessageResponse)
        })
    }
    

}

const chatManager = ChatManager.instance
export default chatManager