import React from "react";
import { AssetPath } from "../../Utils/Constants";
import "./FooterComponent.scss";

const FooterComponent = () => {
  return (
    <>
      <footer className="footer">
        <div className="width_wrapper">
          <div className="logo_about_wrapper">
            <img className="logo" src={AssetPath.footerLogo} alt="" />
            <span className="about">
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum is dummy text of the printing.
            </span>
            <div className="contact_info">
              <img src={AssetPath.addressIcon} alt="" />
              <span>Office 2715 Ash Dr. San Jose, South Dakota 83475</span>
            </div>
            <div className="contact_info">
              <img src={AssetPath.phoneIcon} alt="" />
              <span>2715 83475</span>
            </div>
            <div className="contact_info margin_fix">
              <img src={AssetPath.emailIcon} alt="" />
              <span>johnwick@gmail.com</span>
            </div>
          </div>
          <div style={{ marginLeft: "30px" }} />
          <div className="key_value_wrapper">
            {/* <span className="key">Company</span>
            <a href="#" className="value">
              About
            </a>
            <a href="#" className="value">
              Blog
            </a>
            <a href="#" className="value">
              All Products
            </a>
            <a href="#" className="value">
              Contact
            </a>
            <a href="#" className="value">
              FAQ
            </a>
            <a href="#" className="value">
              Contact Us
            </a>
            <div style={{ height: "20px" }} /> */}
            <span className="key">Services</span>
            <a href="#" className="value">
              Cart
            </a>
            <a href="#" className="value">
              Wish List
            </a>
            <a href="#" className="value">
              Login
            </a>
            <a href="#" className="value">
              Checkout
            </a>
            <a href="#" className="value">
              Terms & Conditions
            </a>
            <a href="#" className="value">
              Promotional Offers
            </a>
          </div>
          <div className="key_value_wrapper">
            <span className="key">Customer Care</span>
            <a href="#" className="value">
              Login
            </a>
            <a href="#" className="value">
              My Account
            </a>
            <a href="#" className="value">
              Wish List
            </a>
            <a href="#" className="value">
              Add Listing
            </a>
            <a href="#" className="value">
              FAQ
            </a>
            <a href="#" className="value">
              Contact Us
            </a>
            <div style={{ height: "20px" }} />
            <span className="key">Newsletter</span>
            <span className="value">
              Subscribe to our weekly Newsletter and receive updates via email.
            </span>
            <div className="email_send">
              <input type="email" placeholder="Enter Email*" />
              <img className="send_button" src={AssetPath.sendIcon} />
            </div>
            <div className="we_accept">
              <span>We Accept</span>
              <img src={AssetPath.acceptedCards} alt="" />
            </div>
          </div>
        </div>
      </footer>
      <div className="developed_by">
        <div className="width_wrapper">
          <span className="rights">All Rights Reserved @RealEstate 2023</span>
          <div className="right_side">
            <a href="#" className="terms">
              Terms & Conditions
            </a>
            <div style={{ width: "30px" }} />
            <a href="#" className="claim">
              Claim
            </a>
            <div style={{ width: "30px" }} />
            <a href="#" className="policy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
