// Original file: proto/chat.proto

import type { Message as _chat_Message, Message__Output as _chat_Message__Output } from '../chat/Message';
import type { MessageAction as _chat_MessageAction, MessageAction__Output as _chat_MessageAction__Output } from '../chat/MessageAction';

export interface ReceiveMessageResponse {
  'message'?: (_chat_Message | null);
  'action'?: (_chat_MessageAction);
}

export interface ReceiveMessageResponse__Output {
  'message'?: (_chat_Message__Output);
  'action'?: (_chat_MessageAction__Output);
}
