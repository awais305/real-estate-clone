import React from "react";
import { membershipData } from "../../Utils/MembershipData";
import ContactComponent from "../../Components/ContactComponent/ContactComponent";
import "./MembershipPlanPage.scss";
import MembershipWidget from "./Widgets/MembershipWidget";
import PathOnPageComponent from "../../Components/PathOnPageComponent/PathOnPageComponent";

const MembershipPlanPage = () => {
  return (
    <>
      <div className="membership_plan_page">
        <div className="width_wrappers">
          <PathOnPageComponent
            parentPage={"Home"}
            childPage={"Membership Plan"}
          />
          <span className="page_title">Subscription</span>
          <div className="membership_plans">
            {membershipData.map((item, index) => (
              <MembershipWidget
                key={index}
                membershipName={item.membershipName}
                membershipType={item.assetPath}
                price={`$${item.price}`}
                allPerks={item.allPerks}
                availablePerks={item.availablePerks}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </div>
      <ContactComponent />
    </>
  );
};

export default MembershipPlanPage;
