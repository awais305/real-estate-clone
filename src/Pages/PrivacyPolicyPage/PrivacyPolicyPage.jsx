import "./PrivacyPolicyPage.scss";
import React from "react";
import ContactComponent from "../../Components/ContactComponent/ContactComponent";
import PathOnPageComponent from "../../Components/PathOnPageComponent/PathOnPageComponent";

const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="privacy_policy_page">
        <div className="width_wrapper">
          <PathOnPageComponent
            parentPage={"Home"}
            childPage={"Privacy Policy"}
          />
          <span className="page_title">Privacy Policy</span>
          <div className="detail_paragraphs">
            <span className="title">Cancelation Policy</span>
            <span className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              risus leo, blandit vitae diam a, vestibulum viverra nisi.
              Vestibulum ullamcorper velit eget mattis aliquam. Proin dapibus
              luctus pulvinar. Integer et libero ut purus bibendum gravida non
              ac tellus. Proin sed tellus porttitor, varius mauris vitae,
              tincidunt augue. Sed consectetur magna elit, sit amet faucibus
              tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque
              vestibulum, fringilla elit sit amet, volutpat nunc.
            </span>
          </div>
          <div className="detail_paragraphs">
            <span className="title">Terms & Condition</span>
            <span className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              risus leo, blandit vitae diam a, vestibulum viverra nisi.
              Vestibulum ullamcorper velit eget mattis aliquam. Proin dapibus
              luctus pulvinar. Integer et libero ut purus bibendum gravida non
              ac tellus. Proin sed tellus porttitor, varius mauris vitae,
              tincidunt augue. Sed consectetur magna elit, sit amet faucibus
              tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque
              vestibulum, fringilla elit sit amet, volutpat nunc. <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              risus leo, blandit vitae diam a, vestibulum viverra nisi.
              Vestibulum ullamcorper velit eget mattis aliquam. Proin dapibus
              luctus pulvinar. Integer et libero ut purus bibendum gravida non
              ac tellus. Proin sed tellus porttitor, varius mauris vitae,
              tincidunt augue. Sed consectetur magna elit, sit amet faucibus
              tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque
              vestibulum, fringilla elit sit amet, volutpat nunc. <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              risus leo, blandit vitae diam a, vestibulum viverra nisi.
              Vestibulum ullamcorper velit eget mattis aliquam. Proin dapibus
              luctus pulvinar. Integer et libero ut purus bibendum gravida non
              ac tellus. Proin sed tellus porttitor, varius mauris vitae,
              tincidunt augue. Sed consectetur magna elit, sit amet faucibus
              tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque
              vestibulum, fringilla elit sit amet, volutpat nunc. <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              risus leo, blandit vitae diam a, vestibulum viverra nisi.
              Vestibulum ullamcorper velit eget mattis aliquam. Proin dapibus
              luctus pulvinar. Integer et libero ut purus bibendum gravida non
              ac tellus. Proin sed tellus porttitor, varius mauris vitae,
              tincidunt augue. Sed consectetur magna elit, sit amet faucibus
              tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque
              vestibulum, fringilla elit sit amet, volutpat nunc. <br />
              <br />
            </span>
          </div>
          <div style={{ marginBottom: "90px" }} />
        </div>
      </div>
      <ContactComponent />
    </>
  );
};

export default PrivacyPolicyPage;
