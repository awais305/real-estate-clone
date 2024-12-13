import { KeyboardArrowDown } from "@mui/icons-material";
import "./PhoneFieldComponent.scss";
import { useState } from "react";

const PhoneFieldComponent = ({
  placeholder,
  selectedCountry,
  onClick,
  getPhoneNumber,
  marginTop,
  marginBottom,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChangePhoneNumber = (value) => {
    setPhoneNumber(value);
    getPhoneNumber(`${selectedCountry.phonecode}${value}`);
  };

  return (
    <div className="phone_input_container">
      <span className="label">Phone Number</span>
      <div
        className="input_wrapper"
        style={{
          marginTop: marginTop || "10px",
          marginBottom: marginBottom || "20px",
        }}
      >
        {selectedCountry !== null && (
          <div className="country_selector" onClick={onClick}>
            <div className="row">
              <img
                className="flag_image"
                src={selectedCountry.flag}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/images/no-image.png";
                }}
              />
            </div>
            <span className="country_code">{`+${selectedCountry.phonecode}`}</span>
            <KeyboardArrowDown className="down_arrow" />
          </div>
        )}
        <input
          className="phone_number_input"
          type="tel"
          placeholder={placeholder}
          value={phoneNumber}
          onChange={(e) => handleChangePhoneNumber(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PhoneFieldComponent;
