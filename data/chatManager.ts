import { ServerWritableStream } from "@grpc/grpc-js";
import { RoomRequest__Output } from "../proto/generatedTypes/chat/RoomRequest";
import { Message as MessageGrpc } from "../proto/generatedTypes/chat/Message";
import { Message } from "@prisma/client";
import { dateToTimestamp } from "../utils/dataConverter";

class ChatManager {
    private chats: Map<number, Map<string, ServerWritableStream<RoomRequest__Output, MessageGrpc>>> = new Map<number, Map<string, ServerWritableStream<RoomRequest__Output, MessageGrpc>>>();
    private static _instance: ChatManager

    private constructor() {}

    public static get instance(): ChatManager {
        if (!ChatManager._instance) {
            ChatManager._instance = new ChatManager()
        }
        return ChatManager._instance
    }

    public addSession(workspaceId: number, userId: string, stream: ServerWritableStream<RoomRequest__Output, MessageGrpc>) {
        if (!this.chats.has(workspaceId)) {
            this.chats.set(workspaceId, new Map<string, ServerWritableStream<RoomRequest__Output, MessageGrpc>>())
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

    public broadcastMessage(workspaceId: number, senderId: string, message: Message) {
        const messageGrpc: MessageGrpc = {
            id: message.id,
            userId: message.userId,
            workspaceId: message.workspaceId,
            text: message.text,
            createdAt: dateToTimestamp(message.createdAt)
        }
        if (!this.chats.has(workspaceId)) return
        this.chats.get(workspaceId)?.forEach((stream, userId) => {
            if (userId === senderId) return
            stream.write(messageGrpc)
        })
    }
    

}

const chatManager = ChatManager.instance
export default chatManager