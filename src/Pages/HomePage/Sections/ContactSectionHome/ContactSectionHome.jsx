import React from "react";
import "./ContactSectionHome.scss";
import HomeSectionHeader from "../../Widgets/HomeSectionsHeader/HomeSectionsHeader";
import ContactFormSection from "../../../ContactUsPage/Widgets/ContactFormSection";
import { AssetPath } from "../../../../Utils/Constants";
import TextFieldComponent from "../../../../Components/TextFieldComponent";
import PhoneFieldComponent from "../../../../Components/PhoneFieldComponent";
import { data as countries } from "/src/assets/countries.json";
import ButtonComponent from "../../../../Components/ButtonComponent";

const ContactSectionHome = () => {
  const selectedCountry = countries[102];

  return (
    <div className="contact_section_home">
      <div className="left_side">
        <h2 className="title">
          We provide the most suitable and quality real estate
        </h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          tristique metus proin id lorem odio
        </p>
        <InfoWidget
          className={"info_widget"}
          url={AssetPath.addressIcon}
          title={"Office Address"}
          subtitle={"2715 Ash Dr. San Jose, South Dakota 83475"}
          onClick={() => {}}
        />
        <InfoWidget
          className={"info_widget"}
          url={AssetPath.phoneIcon}
          title={"Phone Number"}
          subtitle={"111 2345 6666"}
          onClick={() => {}}
        />
        <InfoWidget
          className={"info_widget"}
          url={AssetPath.addressIcon}
          title={"Email Address"}
          subtitle={"johnwick@gmail.com"}
          onClick={() => {}}
        />
        <div className="contact_girl_wrapper">
          <img src="/contact_girl.png" alt="" className="contact_girl" />
        </div>
      </div>
      <div className="right_side">
        <div className={`contact_form`}>
          <div className="heading_wrapper">
            <span className="title">Contact Form</span>
            <span className="subtitle">
              We will respond as soon as we receive your message
            </span>
          </div>
          <img src={AssetPath.chatIcon} alt="" className="chat_icon" />
          <TextFieldComponent
            label={"Your Name"}
            width={"100%"}
            marginBottom={"0"}
            placeholder={"Your Name"}
            prefixIconPath={AssetPath.userIcon}
          />
          <TextFieldComponent
            label={"Email"}
            marginBottom={"0"}
            width={"100%"}
            placeholder={"Email"}
            prefixIconPath={AssetPath.textfieldEmailIcon}
          />
          <PhoneFieldComponent
            placeholder={"123456798"}
            marginBottom={"0"}
            selectedCountry={selectedCountry}
            getPhoneNumber={(phoneNumber) => {
              console.log(phoneNumber);
            }}
            onClick={() => {}}
          />
          <TextFieldComponent
            width={"100%"}
            marginBottom={"0"}
            height={"150px"}
            label={"Message"}
            placeholder={"Your Message"}
            maxRows={"5"}
            isMultiline
          />

          <div style={{ alignSelf: "self-start" }}>
            <ButtonComponent
              text={"Send Request"}
              assetImage={AssetPath.sendIcon}
              width={"174px"}
              fontSize={"15px"}
              height={"46px"}
              fontWeight={"400"}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionHome;

const InfoWidget = ({ className, url, title, subtitle, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <img className="image" src={url} alt="" />
      <div className="key_value_wrapper">
        <span className="key">{title}</span>
        <span className="value">{subtitle}</span>
      </div>
    </div>
  );
};
