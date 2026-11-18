import type { Message } from "../../types";
import "./MessageHistory.css";

interface MessageHistoryProps {
  list?: Message[];
}

const typeToClass: Record<Message["type"], string> = {
  message: "message-own",
  response: "message-response",
  typing: "message-typing",
};

export function MessageHistory({ list = [] }: MessageHistoryProps) {
  if (list.length === 0) {
    return null;
  }

  return (
    <div className="chat-history">
      {list.map(({ id, from, type, time, text }) => {
        const isTyping = type === "typing";

        return (
          <div key={id} className={`message-item ${typeToClass[type]}`}>
            {isTyping && (
              <div className="message-header">
                <span className="message-author">{from.name}</span>
                <span className="message-time">{time}</span>
              </div>
            )}

            {isTyping ? (
              <div className="typing-indicator">
                <span>печатает...</span>
                <span className="typing-dots">•••</span>
              </div>
            ) : (
              <div className="message-bubble">{text}</div>
            )}

            {!isTyping && (
              <div className="message-header">
                <span className="message-author">{from.name}</span>
                <span className="message-time">{time}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
