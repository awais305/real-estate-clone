import React, { useState } from "react";
import "./PropertyFilterbarWidget.scss";
import TextFieldComponent from "../../../../Components/TextFieldComponent";
import DropdownComponent from "../../../../Components/DropdownComponent/DropdownComponent";
import ButtonComponent from "../../../../Components/ButtonComponent";
import { AssetPath } from "../../../../Utils/Constants";

const PropertyFilterbarWidget = () => {
  const [activeButton, setActiveButton] = useState(1);

  const toggleButton = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div className="filterbar_widget">
      <div className="filter_bar_desktop">
        <div className="switch_buttons">
          <ButtonComponent
            className={`button ${activeButton === 1 ? "active" : ""}`}
            text={"Rent"}
            onClick={() => {
              setActiveButton(1);
            }}
          />
          <ButtonComponent
            className={`button ${activeButton === 2 ? "active" : ""}`}
            text={"Buy"}
            onClick={() => {
              setActiveButton(2);
            }}
          />
        </div>
        <TextFieldComponent
          placeholder={"Location"}
          width={"120px"}
          marginBottom={"0"}
          marginTop={"0"}
          height={"40px"}
          isWhiteBackground
        />
        <DropdownComponent
          marginBottom={"0"}
          marginTop={"0"}
          height={"40px"}
          list={["Hotel", "Motel", "Restaurant"]}
          onChanged={(e) => {}}
          width={"120px"}
          isWhiteBackground
        />
        <TextFieldComponent
          placeholder={"Keywords"}
          width={"120px"}
          marginBottom={"0"}
          marginTop={"0"}
          height={"40px"}
          isWhiteBackground
        />
        <ButtonComponent
          className={"search_button"}
          text={"Search Now"}
          postFixAssetImage={AssetPath.searchWhiteIcon}
        />
      </div>
      {/* For Mobile Screen*/}
      <div className="filterbar_mobile">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "-1px 1px 4px 0px #0000001A",
            padding: "17px 23px",
          }}
        >
          <div className="switch_buttons">
            <ButtonComponent
              className={`button ${activeButton === 1 ? "active" : ""}`}
              text={"Rent"}
              onClick={() => {
                setActiveButton(1);
              }}
            />
            <ButtonComponent
              className={`button ${activeButton === 2 ? "active" : ""}`}
              text={"Buy"}
              onClick={() => {
                setActiveButton(2);
              }}
            />
          </div>
          <ButtonComponent
            text={"Search Now"}
            width={"120px"}
            fontSize={"13px"}
            postFixAssetImage={AssetPath.searchWhiteIcon}
          />
        </div>
        {/* <div
          style={{
            marginLeft: "-20px",
            marginRight: "-20px",
            // borderBottom: "1px solid var(--gray)",
            marginBottom: "10px",
          }}
        /> */}
        <div style={{ padding: "14px 23px 23px 23px" }}>
          <TextFieldComponent
            placeholder={"Location"}
            marginTop={"0"}
            height={"40px"}
            isWhiteBackground
          />
          <DropdownComponent
            marginTop={"0"}
            height={"40px"}
            list={["Hotel", "Motel", "Restaurant"]}
            onChanged={(e) => {}}
            isWhiteBackground
          />
          <TextFieldComponent
            placeholder={"Keywords"}
            marginBottom={"0"}
            marginTop={"0"}
            height={"40px"}
            isWhiteBackground
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyFilterbarWidget;
