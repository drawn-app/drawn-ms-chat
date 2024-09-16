// Original file: proto/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteMessageRequest as _chat_DeleteMessageRequest, DeleteMessageRequest__Output as _chat_DeleteMessageRequest__Output } from '../chat/DeleteMessageRequest';
import type { Empty as _chat_Empty, Empty__Output as _chat_Empty__Output } from '../chat/Empty';
import type { MessageList as _chat_MessageList, MessageList__Output as _chat_MessageList__Output } from '../chat/MessageList';
import type { MessageRequest as _chat_MessageRequest, MessageRequest__Output as _chat_MessageRequest__Output } from '../chat/MessageRequest';
import type { ReceiveMessageResponse as _chat_ReceiveMessageResponse, ReceiveMessageResponse__Output as _chat_ReceiveMessageResponse__Output } from '../chat/ReceiveMessageResponse';
import type { RoomRequest as _chat_RoomRequest, RoomRequest__Output as _chat_RoomRequest__Output } from '../chat/RoomRequest';
import type { UpdateMessageRequest as _chat_UpdateMessageRequest, UpdateMessageRequest__Output as _chat_UpdateMessageRequest__Output } from '../chat/UpdateMessageRequest';

export interface ChatClient extends grpc.Client {
  DeleteMessage(argument: _chat_DeleteMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  DeleteMessage(argument: _chat_DeleteMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  DeleteMessage(argument: _chat_DeleteMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  DeleteMessage(argument: _chat_DeleteMessageRequest, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  deleteMessage(argument: _chat_DeleteMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  deleteMessage(argument: _chat_DeleteMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  deleteMessage(argument: _chat_DeleteMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  deleteMessage(argument: _chat_DeleteMessageRequest, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  
  GetMessages(argument: _chat_RoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  GetMessages(argument: _chat_RoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  GetMessages(argument: _chat_RoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  GetMessages(argument: _chat_RoomRequest, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  getMessages(argument: _chat_RoomRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  getMessages(argument: _chat_RoomRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  getMessages(argument: _chat_RoomRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  getMessages(argument: _chat_RoomRequest, callback: grpc.requestCallback<_chat_MessageList__Output>): grpc.ClientUnaryCall;
  
  ReceiveMessages(argument: _chat_RoomRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_ReceiveMessageResponse__Output>;
  ReceiveMessages(argument: _chat_RoomRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_ReceiveMessageResponse__Output>;
  receiveMessages(argument: _chat_RoomRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_ReceiveMessageResponse__Output>;
  receiveMessages(argument: _chat_RoomRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_ReceiveMessageResponse__Output>;
  
  SendMessage(argument: _chat_MessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  SendMessage(argument: _chat_MessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  SendMessage(argument: _chat_MessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  SendMessage(argument: _chat_MessageRequest, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chat_MessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chat_MessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chat_MessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chat_MessageRequest, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  
  UpdateMessage(argument: _chat_UpdateMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  UpdateMessage(argument: _chat_UpdateMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  UpdateMessage(argument: _chat_UpdateMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  UpdateMessage(argument: _chat_UpdateMessageRequest, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  updateMessage(argument: _chat_UpdateMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  updateMessage(argument: _chat_UpdateMessageRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  updateMessage(argument: _chat_UpdateMessageRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  updateMessage(argument: _chat_UpdateMessageRequest, callback: grpc.requestCallback<_chat_Empty__Output>): grpc.ClientUnaryCall;
  
}

export interface ChatHandlers extends grpc.UntypedServiceImplementation {
  DeleteMessage: grpc.handleUnaryCall<_chat_DeleteMessageRequest__Output, _chat_Empty>;
  
  GetMessages: grpc.handleUnaryCall<_chat_RoomRequest__Output, _chat_MessageList>;
  
  ReceiveMessages: grpc.handleServerStreamingCall<_chat_RoomRequest__Output, _chat_ReceiveMessageResponse>;
  
  SendMessage: grpc.handleUnaryCall<_chat_MessageRequest__Output, _chat_Empty>;
  
  UpdateMessage: grpc.handleUnaryCall<_chat_UpdateMessageRequest__Output, _chat_Empty>;
  
}

export interface ChatDefinition extends grpc.ServiceDefinition {
  DeleteMessage: MethodDefinition<_chat_DeleteMessageRequest, _chat_Empty, _chat_DeleteMessageRequest__Output, _chat_Empty__Output>
  GetMessages: MethodDefinition<_chat_RoomRequest, _chat_MessageList, _chat_RoomRequest__Output, _chat_MessageList__Output>
  ReceiveMessages: MethodDefinition<_chat_RoomRequest, _chat_ReceiveMessageResponse, _chat_RoomRequest__Output, _chat_ReceiveMessageResponse__Output>
  SendMessage: MethodDefinition<_chat_MessageRequest, _chat_Empty, _chat_MessageRequest__Output, _chat_Empty__Output>
  UpdateMessage: MethodDefinition<_chat_UpdateMessageRequest, _chat_Empty, _chat_UpdateMessageRequest__Output, _chat_Empty__Output>
}
