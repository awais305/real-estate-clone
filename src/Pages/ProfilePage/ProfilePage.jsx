import ButtonComponent from "../../Components/ButtonComponent";
import DateComponent from "../../Components/DateComponent/DateComponent";
import DropdownComponent from "../../Components/DropdownComponent/DropdownComponent";
import PhoneFieldComponent from "../../Components/PhoneFieldComponent";
import RadioButtonComponent from "../../Components/RadioButtonComponent";
import TextFieldComponent from "../../Components/TextFieldComponent";
import UploadImageComponent from "../../Components/UploadImageComponent/UploadImageComponent";
import { AssetPath } from "../../Utils/Constants";
import ContactComponent from "../../Components/ContactComponent/ContactComponent";
import "./ProfilePage.scss";
import React, { useRef, useState } from "react";

import { data as countries } from "/src/assets/countries.json";
import PathOnPageComponent from "../../Components/PathOnPageComponent/PathOnPageComponent";

const ProfilePage = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dateOfBirthRef = useRef(null);
  const [selectedGender, setSelectedGender] = useState("Male");
  const [selectedLanguage, setSelectedLanguage] = useState();

  const genders = ["Male", "Female", "Others"];
  const languages = ["English", "Français"];

  const selectedCountry = countries[102];

  return (
    <>
      <div className="profile_page">
        <div className="width_wrapper">
          <PathOnPageComponent parentPage={"Home"} childPage={"Profile"} />
          <div className="profile_fields_container">
            <span className="heading">Profile</span>
            <UploadImageComponent url={AssetPath.profilePicture} />
            <div className="profile_form_fields">
              <TextFieldComponent
                className={"profile_text_field"}
                label={"First Name"}
                inputRef={firstNameRef}
                placeholder={"John"}
                prefixIconPath={AssetPath.userIcon}
              />
              <TextFieldComponent
                className={"profile_text_field"}
                label={"Last Name"}
                inputRef={lastNameRef}
                placeholder={"Doe"}
                prefixIconPath={AssetPath.userIcon}
              />
              <TextFieldComponent
                className={"profile_text_field"}
                label={"Email"}
                inputRef={emailRef}
                inputMode={"email"}
                type={"email"}
                placeholder={"johndoe@example.com"}
                prefixIconPath={AssetPath.textfieldEmailIcon}
              />
              <div className="profile_text_field">
                <PhoneFieldComponent
                  placeholder={"123456798"}
                  selectedCountry={selectedCountry}
                  getPhoneNumber={(phoneNumber) => {
                    console.log(phoneNumber);
                  }}
                  onClick={() => {}}
                />
              </div>
              <DropdownComponent
                title={"Select Language"}
                list={languages}
                onChanged={(value) => {
                  setSelectedLanguage(value);
                }}
              />
              <DateComponent
                className={"profile_text_field"}
                inputRef={dateOfBirthRef}
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
                  backgroundColor={"#E5EAF5"}
                  textColor={"var(--black)"}
                  fontWeight={"700"}
                  text={"Cancel"}
                />
                <ButtonComponent
                  className={"form_button"}
                  height={"52px"}
                  fontWeight={"700"}
                  text={"Save Info"}
                  onClick={() => {
                    console.log(dateOfBirthRef.current.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactComponent />
    </>
  );
};

export default ProfilePage;
