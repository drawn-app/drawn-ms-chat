// Original file: proto/chat.proto

export const MessageAction = {
  CREATE: 0,
  UPDATE: 1,
  DELETE: 2,
} as const;

export type MessageAction =
  | 'CREATE'
  | 0
  | 'UPDATE'
  | 1
  | 'DELETE'
  | 2

export type MessageAction__Output = typeof MessageAction[keyof typeof MessageAction]
