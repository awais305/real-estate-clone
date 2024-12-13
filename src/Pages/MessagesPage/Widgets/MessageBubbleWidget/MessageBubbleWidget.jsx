import React from "react";
import "./MessageBubbleWidget.scss";
import { formatTimeAmPm } from "../../../../Utils/Snippets";

const MessageBubbleWidget = ({ isSender, message, timestamp }) => {
  return (
    <div className="message_bubble_widget">
      <div className={`${isSender ? "sender_wrapper" : "receiver_wrapper"}`}>
        {isSender && (
          <span className="timestamp">
            {formatTimeAmPm(timestamp.toLocaleString())}
          </span>
        )}
        <div className={`${isSender ? "sender_bubble" : "receiver_bubble"}`}>
          <p className="message_content">{message}</p>
        </div>
        {!isSender && (
          <span className="timestamp">
            {formatTimeAmPm(timestamp.toLocaleString())}
          </span>
        )}
      </div>
    </div>
  );
};

export default MessageBubbleWidget;
