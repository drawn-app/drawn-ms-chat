// Original file: proto/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _chat_Empty, Empty__Output as _chat_Empty__Output } from '../chat/Empty';
import type { Message as _chat_Message, Message__Output as _chat_Message__Output } from '../chat/Message';
import type { MessageList as _chat_MessageList, MessageList__Output as _chat_MessageList__Output } from '../chat/MessageList';
import type { RoomRequest as _chat_RoomRequest, RoomRequest__Output as _chat_RoomRequest__Output } from '../chat/RoomRequest';

export interface ChatClient extends grpc.Client {
  GetMessages(argument: _chat_RoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  GetMessages(argument: _chat_RoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  GetMessages(argument: _chat_RoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  GetMessages(argument: _chat_RoomRequest, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  getMessages(argument: _chat_RoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  getMessages(argument: _chat_RoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  getMessages(argument: _chat_RoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  getMessages(argument: _chat_RoomRequest, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  
  ReceiveMessages(argument: _chat_RoomRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_Message__Output>;
  ReceiveMessages(argument: _chat_RoomRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_Message__Output>;
  receiveMessages(argument: _chat_RoomRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_Message__Output>;
  receiveMessages(argument: _chat_RoomRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_Message__Output>;
  
  SendMessage(argument: _chat_Message, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  SendMessage(argument: _chat_Message, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  SendMessage(argument: _chat_Message, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  SendMessage(argument: _chat_Message, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chat_Message, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chat_Message, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chat_Message, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chat_Message, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  
}

export interface ChatHandlers extends grpc.UntypedServiceImplementation {
  GetMessages: grpc.handleUnaryCall<_chat_RoomRequest__Output, _chat_MessageList>;
  
  ReceiveMessages: grpc.handleServerStreamingCall<_chat_RoomRequest__Output, _chat_Message>;
  
  SendMessage: grpc.handleUnaryCall<_chat_Message__Output, _chat_Empty>;
  
}

export interface ChatDefinition extends grpc.ServiceDefinition {
  GetMessages: MethodDefinition<_chat_RoomRequest, _chat_MessageList, _chat_RoomRequest__Output, _chat_MessageList__Output>
  ReceiveMessages: MethodDefinition<_chat_RoomRequest, _chat_Message, _chat_RoomRequest__Output, _chat_Message__Output>
  SendMessage: MethodDefinition<_chat_Message, _chat_Empty, _chat_Message__Output, _chat_Empty__Output>
}
