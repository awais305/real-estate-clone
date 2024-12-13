import React from "react";
import PhoneFieldComponent from "../../../Components/PhoneFieldComponent";
import TextFieldComponent from "../../../Components/TextFieldComponent";
import { AssetPath } from "../../../Utils/Constants";
import "./ContactFormSection.scss";
import { data as countries } from "/src/assets/countries.json";
import ButtonComponent from "../../../Components/ButtonComponent";

const ContactFormSection = () => {
  const selectedCountry = countries[102];

  return (
    <div className="contact_form_container">
      <div className="contact_form">
        <img src={AssetPath.chatIcon} alt="" className="chat_icon" />
        <span className="title">Contact Form</span>
        <span className="subtitle">
          We will respond as soon as we receive your message.
        </span>
        <div className="form">
          <TextFieldComponent
            className={"contact_field"}
            label={"Your Name"}
            placeholder={"Your Name"}
            prefixIconPath={AssetPath.userIcon}
          />
          <TextFieldComponent
            className={"contact_field"}
            label={"Email"}
            placeholder={"Email"}
            prefixIconPath={AssetPath.textfieldEmailIcon}
          />
          <div className={"contact_field"}>
            <PhoneFieldComponent
              placeholder={"123456798"}
              selectedCountry={selectedCountry}
              getPhoneNumber={(phoneNumber) => {
                console.log(phoneNumber);
              }}
              onClick={() => {}}
            />
          </div>
        </div>
        <TextFieldComponent
          width={"100%"}
          height={"150px"}
          label={"Message"}
          placeholder={"Your Message"}
          maxRows={"5"}
          isMultiline
        />
        <div style={{ alignSelf: "self-start", marginTop: "40px" }}>
          <div className="message_button">
            <img
              className="message_button_icon"
              src={AssetPath.sendIcon}
              alt=""
            />
            <span className={"message_button_text"}>Send Message</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
