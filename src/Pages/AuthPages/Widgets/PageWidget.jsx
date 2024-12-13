import React from "react";
import { AssetPath } from "../../../Utils/Constants";
import "./PageWidget.scss";

const PageWidget = ({ children }) => {
  return (
    <div className="page_widget">
      <div className="bg_image">
        <img src={AssetPath.authBackground} alt="" />
        <img className="auth_logo" src={AssetPath.footerLogo} alt="" />
        <button className="action_button">Register</button>
      </div>
      {children}
    </div>
  );
};

export default PageWidget;
