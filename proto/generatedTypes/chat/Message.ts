// Original file: proto/chat.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Message {
  'id'?: (string);
  'userId'?: (string);
  'workspaceId'?: (number);
  'text'?: (string);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
}

export interface Message__Output {
  'id'?: (string);
  'userId'?: (string);
  'workspaceId'?: (number);
  'text'?: (string);
  'createdAt'?: (_google_protobuf_Timestamp__Output);
  'updatedAt'?: (_google_protobuf_Timestamp__Output);
}
