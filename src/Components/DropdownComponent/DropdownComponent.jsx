import React from "react";
import "./DropdownComponent.scss";

const DropdownComponent = ({
  className,
  width,
  height,
  isWhiteBackground,
  marginTop,
  marginBottom,
  title,
  list,
  onChanged,
}) => {
  const handleSelectChange = (event) => {
    const selectedIndex = event.target.value;
    const selectedValue = list[selectedIndex - 1]; // Adjust index to match array index
    onChanged(selectedValue);
    console.log("Selected Item:", selectedValue);
    console.log("Selected Index:", selectedIndex);
  };
  return (
    <div
      className={className || "dropdown_component"}
      style={{
        width: `${width || "calc(50% - 30px)"}`,
      }}
      onChange={handleSelectChange}
    >
      {title && <span>{title}</span>}
      <select
        defaultValue="0"
        style={{
          height: `${height || "var(--textfieldHeight)"}`,
          marginTop: `${marginTop || "10px"}`,
          marginBottom: `${marginBottom || "21px"}`,
          backgroundColor: `${isWhiteBackground ? "white" : "#F4F6F9"}`,
        }}
      >
        {/* <option value="0" disabled>
          Select
        </option> */}
        {list?.map((item, index) => (
          <option key={item} value={index + 1}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;
