import React from "react";
import "./HomeSectionsHeader.scss";

const HomeSectionHeader = ({ title, subtitle }) => {
  return (
    <div className="home_sections_header">
      <h1 className="section_title">{title}</h1>
      <p className="section_subtitle">{subtitle}</p>
    </div>
  );
};

export default HomeSectionHeader;
