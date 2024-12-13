import React from "react";
import "./SocialButtonWidget.scss";
import { AssetPath } from "../../../Utils/Constants";

const SocialButtonWidget = ({ socialIcon, onClick }) => {
  return (
    <div className="social_button" onClick={onClick}>
      <img src={socialIcon} alt="" />
    </div>
  );
};

export default SocialButtonWidget;
