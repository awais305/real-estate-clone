import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../../Components/ButtonComponent";
import ContactComponent from "../../../Components/ContactComponent/ContactComponent";
import TextFieldComponent from "../../../Components/TextFieldComponent";
import { RoutePath } from "../../../Routes/RoutePaths";
import { AssetPath } from "../../../Utils/Constants";
import AuthImageWidget from "../Widgets/AuthImageWidget";
import SocialButtonWidget from "../Widgets/SocialButtonWidget";
import "./LoginPage.scss";

const LoginPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  return (
    <div className="login_page">
      <div className="container">
        <div className="column center">
          <span className="login_heading">Login</span>
          <span className="login_subheading">Sign In into your account</span>
        </div>
        <TextFieldComponent
          classNameLabel="form_text_field"
          className="form_text_field"
          prefixIconPath={AssetPath.textfieldEmailIcon}
          inputRef={emailRef}
          inputMode={"email"}
          type={"email"}
          label={"Email"}
          placeholder={"name@example.com"}
        />
        <TextFieldComponent
          classNameLabel="form_text_field"
          className="form_text_field"
          prefixIconPath={AssetPath.textfieldPasswordIcon}
          inputRef={passwordRef}
          label={"Password"}
          placeholder={"**********"}
          isPasswordField
        />
        <span
          className="forgot_password"
          onClick={() => {
            navigate(RoutePath.ForgotPasswordPage);
          }}
        >
          Forgot Password
        </span>
        <ButtonComponent
          className={"form_button"}
          height={"52px"}
          fontWeight={"700"}
          text={"Login"}
          onClick={() => {
            const isSignedIn = { value: true };
            localStorage.setItem("isSignedIn", JSON.stringify(isSignedIn));
          }}
        />
        <p>
          <span>or Continue with</span>
        </p>
        <div className="social_buttons">
          <SocialButtonWidget
            socialIcon={AssetPath.googleIcon}
            onClick={() => {}}
          />
          <SocialButtonWidget
            socialIcon={AssetPath.facebookIcon}
            onClick={() => {}}
          />
        </div>
        <div className="row">
          <div className="already_account">Don't have an account?</div>
          <div
            className="already_account register"
            onClick={() => {
              navigate(RoutePath.RegisterPage);
            }}
          >
            Sign Up
          </div>
        </div>
      </div>
      <AuthImageWidget
        pageName={"login"}
        navigateButton={"Register"}
        navigateTo={RoutePath.RegisterPage}
      />
      <ContactComponent />
    </div>
  );
};

export default LoginPage;
