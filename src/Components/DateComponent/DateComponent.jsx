import "./DateComponent.scss";
import React from "react";

const DateComponent = ({ className, label, placeholder, inputRef }) => {
  return (
    <div className={className}>
      <span className="date_label">{label}</span>
      <input
        className="date_field"
        ref={inputRef}
        type="date"
        placeholder={placeholder}
      />
    </div>
  );
};

export default DateComponent;
