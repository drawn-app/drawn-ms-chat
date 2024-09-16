import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChatClient as _chat_ChatClient, ChatDefinition as _chat_ChatDefinition } from './chat/Chat';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chat: {
    Chat: SubtypeConstructor<typeof grpc.Client, _chat_ChatClient> & { service: _chat_ChatDefinition }
    DeleteMessageRequest: MessageTypeDefinition
    Empty: MessageTypeDefinition
    Message: MessageTypeDefinition
    MessageAction: EnumTypeDefinition
    MessageList: MessageTypeDefinition
    MessageRequest: MessageTypeDefinition
    ReceiveMessageResponse: MessageTypeDefinition
    RoomRequest: MessageTypeDefinition
    UpdateMessageRequest: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
}

