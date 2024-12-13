import React, { useRef } from "react";
import "./ChangePasswordPage.scss";
import ContactComponent from "../../Components/ContactComponent/ContactComponent";
import PathOnPageComponent from "../../Components/PathOnPageComponent/PathOnPageComponent";
import TextFieldComponent from "../../Components/TextFieldComponent";
import ButtonComponent from "../../Components/ButtonComponent";
import { AssetPath } from "../../Utils/Constants";

const ChangePasswordPage = () => {
  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <>
      <div className="change_password_page">
        <div className="width_wrapper">
          <PathOnPageComponent
            parentPage={"Home"}
            childPage={"Change Password"}
          />
          <div className="container">
            <div className="form_fields">
              <span className="page_name">Change Password</span>
              <div className="text_fields">
                <TextFieldComponent
                  label={"Current Password"}
                  inputRef={currentPasswordRef}
                  prefixIconPath={AssetPath.textfieldPasswordIcon}
                  placeholder={"***********"}
                  isPasswordField
                />
                <TextFieldComponent
                  label={"New Password"}
                  inputRef={newPasswordRef}
                  prefixIconPath={AssetPath.textfieldPasswordIcon}
                  placeholder={"***********"}
                  isPasswordField
                />
                <TextFieldComponent
                  label={"Confirm Password"}
                  inputRef={confirmPasswordRef}
                  prefixIconPath={AssetPath.textfieldPasswordIcon}
                  placeholder={"***********"}
                  isPasswordField
                />
                <ButtonComponent
                  height={"52px"}
                  text={"Change Password"}
                  fontWeight={"700"}
                />
              </div>
            </div>
            <img
              src={AssetPath.passwordPicture}
              alt=""
              className="password_image"
            />
          </div>
        </div>
      </div>
      <ContactComponent />
    </>
  );
};

export default ChangePasswordPage;
