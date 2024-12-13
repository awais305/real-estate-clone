import React from "react";
import { AssetPath } from "../../../../Utils/Constants";
import "./MainFocusSection.scss";
import HomeSectionsHeader from "../../Widgets/HomeSectionsHeader/HomeSectionsHeader";

const MainFocusSection = () => {
  return (
    <div className="main_focus_section">
      <HomeSectionsHeader title={"Our Main Focus"} />
      <div className="selectors_wrapper">
        <FocusSelector
          imageUrl={AssetPath.buyHomeImage}
          title={"Buy a Home"}
          subtitle={`Over 1 million+ homes for sale available on the website, we can
        match you with a house you will want to call home.`}
        />
        <FocusSelector
          imageUrl={AssetPath.rentHomeImage}
          title={"Rent a Home"}
          subtitle={`Over 1 million+ homes for sale available on the website, we can
        match you with a house you will want to call home.`}
        />
      </div>
    </div>
  );
};

export default MainFocusSection;

const FocusSelector = ({ imageUrl, title, subtitle, to }) => {
  return (
    <div className="focus_selector">
      <img src={imageUrl} alt="" className="selector_image" />
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <a href={to} className="link">
        Find A Home →
      </a>
    </div>
  );
};
