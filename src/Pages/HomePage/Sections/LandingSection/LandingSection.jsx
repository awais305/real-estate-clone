import React from "react";
import "./LandingSection.scss";
import { AssetPath } from "../../../../Utils/Constants";
import DropdownComponent from "../../../../Components/DropdownComponent/DropdownComponent";
import TextFieldComponent from "../../../../Components/TextFieldComponent";
import ButtonComponent from "../../../../Components/ButtonComponent";
import FilterbarWidget from "../../Widgets/FilterbarWidget/FilterbarWidget";

const LandingSection = () => {
  return (
    <div className="landing_section">
      <div className="width_wrapper">
        <div className="left_side_text">
          <div className="main_text_wrapper">
            <h1 className="title">We Will Find A Perfect Home For You</h1>
            <p className="subtitle">
              Find a variety of properties that suit you very Easley, forget all
              difficulties in finding a residence for you.
            </p>
          </div>
          <div className="counts_wrapper">
            <div className="counts">
              <h1 className="numbers">1700+</h1>
              <p className="numbers_for">Property Ready</p>
            </div>
            <div className="counts">
              <h1 className="numbers">1200+</h1>
              <p className="numbers_for">Happy Customers</p>
            </div>
          </div>
          <div className="mobile_filter">
            <FilterbarWidget />
          </div>
        </div>
        <div className="property_image_container">
          <img
            src={AssetPath.propertyImage}
            alt=""
            className="property_image"
          />
          <img src={AssetPath.findDreamsLogo} alt="" className="logo" />
        </div>
        <div className="desktop_filter">
          <FilterbarWidget />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
