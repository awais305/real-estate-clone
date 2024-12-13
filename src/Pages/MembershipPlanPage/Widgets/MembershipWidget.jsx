import React from "react";
import "./MembershipWidget.scss";
import { AssetPath } from "../../../Utils/Constants";
import { capitalizeFirstLetter } from "../../../Utils/Snippets";
import { Check } from "@mui/icons-material";
import ButtonComponent from "../../../Components/ButtonComponent";

const MembershipWidget = ({
  membershipType,
  price,
  allPerks,
  availablePerks,
  color,
}) => {
  var pathArray = membershipType.split("/");
  var membershipName = pathArray[pathArray.length - 1].split(".")[0];

  return (
    <div className="membership_widget">
      <div className="membership_header">
        <img
          className={`membership_header_img ${membershipName}`}
          src={membershipType}
        />
        <div className="membership_name">
          <span className="heading">
            {capitalizeFirstLetter(membershipName)}
          </span>
        </div>
        <div className="price_circle">
          <span className={`price_text ${membershipName}`}>{price}</span>
          <span className={`price_currency`}>USD</span>
        </div>
        <img
          className="left_circle"
          src={`/membership_images/${membershipName}_left.png`}
        />
        <img
          className="right_circle"
          src={`/membership_images/${membershipName}_right.png`}
        />
      </div>
      {allPerks.map((perk, index) => (
        <div key={index} className={`membership_list_item`}>
          <Check
            className="check"
            style={{
              color: color,
              opacity: availablePerks.includes(index) ? 1 : 0.4,
            }}
          />
          <span
            className={`point ${
              availablePerks.includes(index) && " included_perk"
            }`}
          >
            {perk}
          </span>
        </div>
      ))}
      <div className="membership_button_wrapper">
        <ButtonComponent
          className="membership_button"
          text={"Subscribe Now"}
          width={"60%"}
          fontWeight={"700"}
          backgroundColor={"#BCBCBC"}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default MembershipWidget;
