import React from "react";
import "./InboxItemWidget.scss";
import { AssetPath } from "../../../../Utils/Constants";

const InboxItemWidget = ({
  isOnline,
  selected,
  unread,
  senderName,
  messagePreview,
  onClick,
}) => {
  return (
    <div
      className={`inbox_item_widget ${selected && "selected"}`}
      onClick={onClick}
    >
      <div className="widget_row">
        <div className="sender_image_wrapper">
          <img className="sender_image" src={AssetPath.profilePicture} alt="" />
          {isOnline && <div className="online_icon" />}
        </div>
        <div className="sender_info">
          <span className="sender_name">{senderName}</span>
          <span className={`message_preview ${unread ? "unread" : ""}`}>
            {messagePreview}
          </span>
        </div>
        <span className="message_time">09:34 PM</span>
      </div>
    </div>
  );
};

export default InboxItemWidget;
