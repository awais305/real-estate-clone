import React from "react";
import PathOnPageComponent from "../../Components/PathOnPageComponent/PathOnPageComponent";
import "./ContactUsPage.scss";
import ContactInfoSection from "./Widgets/ContactInfoSection";
import FrequentlyAskedSection from "./Widgets/FrequentlyAskedSection";
import ContactFormSection from "./Widgets/ContactFormSection";

const ContactUsPage = () => {
  return (
    <>
      <div className="contact_us_page">
        <div className="width_wrapper">
          <PathOnPageComponent parentPage={"Home"} childPage={"Contact Us"} />
        </div>
      </div>
      <ContactInfoSection />
      <div className="contact_us_page">
        <div className="width_wrapper">
          <FrequentlyAskedSection />
          <ContactFormSection />
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
