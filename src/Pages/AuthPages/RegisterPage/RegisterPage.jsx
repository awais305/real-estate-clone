import React, { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../../Components/ButtonComponent";
import ContactComponent from "../../../Components/ContactComponent/ContactComponent";
import DateComponent from "../../../Components/DateComponent/DateComponent";
import DropdownComponent from "../../../Components/DropdownComponent/DropdownComponent";
import RadioButtonComponent from "../../../Components/RadioButtonComponent";
import TextFieldComponent from "../../../Components/TextFieldComponent";
import UploadImageComponent from "../../../Components/UploadImageComponent/UploadImageComponent";
import { RoutePath } from "../../../Routes/RoutePaths";
import { AssetPath } from "../../../Utils/Constants";
import AuthImageWidget from "../Widgets/AuthImageWidget";
import SocialButtonWidget from "../Widgets/SocialButtonWidget";
import "./RegisterPage.scss";

const RegisterPage = () => {
  const navigate = useNavigate();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const dateOfBirthRef = useRef(null);
  const [selectedGender, setSelectedGender] = useState("Male");
  const [selectedLanguage, setSelectedLanguage] = useState();

  const genders = ["Male", "Female", "Others"];
  const languages = ["English", "Français"];

  return (
    <div className="register_page">
      <div className="container">
        <span className="register_heading">Register</span>
        <UploadImageComponent url={AssetPath.profilePicture} />
        <div className="form_fields">
          <TextFieldComponent
            className={"form_text_field"}
            label={"First Name"}
            inputRef={firstNameRef}
            placeholder={"John"}
            prefixIconPath={AssetPath.userIcon}
          />
          <TextFieldComponent
            className={"form_text_field"}
            label={"Last Name"}
            inputRef={lastNameRef}
            placeholder={"Doe"}
            prefixIconPath={AssetPath.userIcon}
          />
          <TextFieldComponent
            className={"form_text_field"}
            label={"Email"}
            inputRef={emailRef}
            inputMode={"email"}
            type={"email"}
            placeholder={"johndoe@example.com"}
            prefixIconPath={AssetPath.textfieldEmailIcon}
          />
          <TextFieldComponent
            className={"form_text_field"}
            label={"Password"}
            inputRef={passwordRef}
            prefixIconPath={AssetPath.textfieldPasswordIcon}
            placeholder={"**********"}
            isPasswordField
          />
          <TextFieldComponent
            className={"form_text_field"}
            inputRef={confirmPasswordRef}
            label={"Confirm Password"}
            prefixIconPath={AssetPath.textfieldPasswordIcon}
            placeholder={"**********"}
            isPasswordField
          />
          <DropdownComponent
            title={"Select Language"}
            list={languages}
            onChanged={(value) => {
              setSelectedLanguage(value);
            }}
          />

          <DateComponent
            inputRef={dateOfBirthRef}
            className={"form_text_field"}
            label={"Date of Birth"}
            placeholder={"mm/dd/yyyy"}
          />
          <div className={"gender_section"}>
            <span>Gender</span>
            <div className="gender_radio">
              {genders.map((gender) => {
                return (
                  <RadioButtonComponent
                    key={gender}
                    title={gender}
                    isSelected={selectedGender === gender}
                    onClick={() => {
                      setSelectedGender(gender);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="finalize_buttons_wrapper">
          <div className="finalize_buttons">
            <ButtonComponent
              className={"form_button"}
              height={"52px"}
              fontWeight={"700"}
              text={"Complete Profile"}
            />
            <p>
              <span>Or Continue With</span>
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
              <div className="already_account">Already have an account?</div>
              <div
                className="already_account signup"
                onClick={() => {
                  navigate(RoutePath.LoginPage);
                }}
              >
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthImageWidget
        pageName={"register"}
        navigateButton={"Login"}
        navigateTo={RoutePath.LoginPage}
      />
      <ContactComponent />
    </div>
  );
};

export default RegisterPage;
