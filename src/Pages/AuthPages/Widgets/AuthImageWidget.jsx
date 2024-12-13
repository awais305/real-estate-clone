import React from "react";
import { AssetPath } from "../../../Utils/Constants";
import { RoutePath } from "../../../Routes/RoutePaths";
import { useNavigate } from "react-router-dom";
import "./AuthImageWidget.scss";

const AuthImageWidget = ({ pageName, navigateButton, navigateTo }) => {
  const navigate = useNavigate();

  return (
    <div className="bg_image">
      <img
        className={`image ${pageName}`}
        src={AssetPath.authBackground}
        alt=""
      />
      <div className="auth_navbar">
        <img className="auth_logo" src={AssetPath.fullLogo} alt="" />
        {pageName === "verify-code" ? (
          <></>
        ) : (
          <button
            onClick={() => {
              navigate(navigateTo);
            }}
            className="action_button"
          >
            {navigateButton}
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthImageWidget;
