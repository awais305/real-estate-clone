import React from "react";
import "./ChatDetailAppbar.scss";
import { AssetPath } from "../../../../Utils/Constants";
import { useNavigate } from "react-router-dom";

const ChatDetailAppbar = ({ senderName, isOnline }) => {
  const navigate = useNavigate();
  return (
    <div className="chat_detail_appbar">
      <img
        className="back_arrow"
        src={AssetPath.backArrowIcon}
        alt=""
        onClick={() => navigate(-1)}
      />
      <div className="sender_image_wrapper">
        <img className="sender_image" src={AssetPath.profilePicture} alt="" />
        {<div className="online_icon" />}
      </div>
      <div className="chat_info">
        <span className="sender_name">{senderName}</span>
        <span className="online_status">{isOnline && "Online"}</span>
      </div>
    </div>
  );
};

export default ChatDetailAppbar;
