import ButtonComponent from "../../../Components/ButtonComponent";
import TextFieldComponent from "../../../Components/TextFieldComponent";
import AuthImageWidget from "../Widgets/AuthImageWidget";
import ContactComponent from "../../../Components/ContactComponent/ContactComponent";
import "./VerifyCodePage.scss";
import OTPInput from "otp-input-react";

import React, { useRef, useState } from "react";

const VerifyCodePage = () => {
  const [OTP, setOTP] = useState("");

  return (
    <div className="verify_code_page">
      <div className="container">
        <span className="verify_code_heading">Verify Code</span>
        <span className="verify_code_regular_text">
          Please enter the code we just sent to email
        </span>
        <span className="verify_code_regular_text highlight">
          example@email.com
        </span>
        <div className="otp_fields">
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
            placeholder="----"
            inputStyles={{
              width: "63px",
              height: "52px",
              outline: "none",
              fontSize: "15px",
              fontWeight: "400",
              borderRadius: "12px",
              backgroundColor: "#F4F6F9",
              border: "1px solid #a7a7a7",
            }}
          />
        </div>
        <span className="verify_code_regular_text">Did't receive OTP?</span>
        <span className="verify_code_regular_text resend">Resend Code</span>

        <ButtonComponent
          className={"form_button"}
          height={"52px"}
          fontWeight={"700"}
          text={"Verify"}
        />
      </div>
      <AuthImageWidget pageName={"verify-code"} />
      <ContactComponent />
    </div>
  );
};

export default VerifyCodePage;
