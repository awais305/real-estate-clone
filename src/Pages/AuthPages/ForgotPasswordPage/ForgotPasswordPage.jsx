import React, { useRef } from "react";
import ButtonComponent from "../../../Components/ButtonComponent";
import ContactComponent from "../../../Components/ContactComponent/ContactComponent";
import TextFieldComponent from "../../../Components/TextFieldComponent";
import { RoutePath } from "../../../Routes/RoutePaths";
import { AssetPath } from "../../../Utils/Constants";
import AuthImageWidget from "../Widgets/AuthImageWidget";
import "./ForgotPasswordPage.scss";

const ForgotPasswordPage = () => {
  const emailRef = useRef(null);

  return (
    <div className="forgot_password">
      <div className="container">
        <span className="fotgot_password_heading">Forgot Password</span>
        <TextFieldComponent
          classNameLabel="form_text_field"
          className="form_text_field"
          prefixIconPath={AssetPath.textfieldEmailIcon}
          inputRef={emailRef}
          inputMode={"email"}
          label={"Enter Your Email"}
          placeholder={"name@example.com"}
        />
        <div className="buttons">
          <ButtonComponent
            className={"form_button"}
            height={"52px"}
            fontWeight={"700"}
            backgroundColor={"#E5EAF5"}
            textColor={"var(--black)"}
            text={"Cancel"}
          />
          <ButtonComponent
            className={"form_button"}
            height={"52px"}
            fontWeight={"700"}
            text={"Forgot Password"}
          />
        </div>
      </div>
      <AuthImageWidget
        pageName={"forgot_password"}
        navigateButton={"Login"}
        navigateTo={RoutePath.LoginPage}
      />
      <ContactComponent />
    </div>
  );
};

export default ForgotPasswordPage;
