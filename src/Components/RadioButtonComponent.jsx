import React from "react";
import "./RadioButtonComponent.scss";

const RadioButtonComponent = ({ title, isSelected, onClick }) => {
  return (
    <div className="radio_button_component" onClick={onClick}>
      <div className={`radio_icon_border ${isSelected ? "is_selected" : ""}`}>
        <div className={`radio_icon ${isSelected ? "is_selected" : ""}`} />
      </div>
      <div className="radio_label">{title}</div>
    </div>
  );
};

export default RadioButtonComponent;
