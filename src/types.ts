export type MessageType = "response" | "message" | "typing";

export interface User {
  name: string;
}

export interface Message {
  id: string;
  from: User;
  type: MessageType;
  time: string;
  text?: string;
}
