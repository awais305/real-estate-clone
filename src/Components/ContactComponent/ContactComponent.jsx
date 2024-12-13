import React from "react";
import "./ContactComponent.scss";
import { AssetPath } from "../../Utils/Constants";

const ContactComponent = () => {
  return (
    <div className="contact_container">
      <div className="width_wrapper">
        <div className="info_text">
          <span className="heading">
            Find for your dream home and increase your investment opportunities
          </span>
          <span className="text">
            Enjoy a vibrant lifestyle in a peaceful setting.
          </span>
        </div>
        <img className="img_contact" src={AssetPath.contactusPerson} alt="" />
        <button className="contact_seller">
          <img className="phone_icon" src={AssetPath.contactusPhone} alt="" />
          <span>Contact Seller</span>
        </button>
      </div>
    </div>
  );
};

export default ContactComponent;
