import { AssetPath } from "../../../Utils/Constants";
import "./ContactInfoSection.scss";
import React from "react";

const ContactInfoSection = () => {
  return (
    <div className="contact_info_section">
      <div className="width_wrapper">
        <div className="left_side">
          <div className="info_text">
            <span className="heading">
              We provide the most suitable and quality real estate.
            </span>
            <span className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
              tristique metus proin id lorem odio
            </span>
          </div>
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
        </div>
        <img className="img_contact" src={AssetPath.contactusPerson} alt="" />
        <InfoWidget
          className={"info_widget_down"}
          url={AssetPath.addressIcon}
          title={"Office Address"}
          subtitle={"2715 Ash Dr. San Jose, South Dakota 83475"}
          onClick={() => {}}
        />
        <InfoWidget
          className={"info_widget_down"}
          url={AssetPath.phoneIcon}
          title={"Phone Number"}
          subtitle={"111 2345 6666"}
          onClick={() => {}}
        />
        <InfoWidget
          className={"info_widget_down"}
          url={AssetPath.addressIcon}
          title={"Email Address"}
          subtitle={"johnwick@gmail.com"}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default ContactInfoSection;

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
