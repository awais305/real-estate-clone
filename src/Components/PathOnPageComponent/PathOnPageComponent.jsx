import React from "react";
import "./PathOnPageComponent.scss";

const PathOnPageComponent = ({ parentPage, childPage }) => {
  return (
    <div className="breadcrumb">
      <span>{parentPage}</span> &gt; <span>{childPage}</span>
    </div>
  );
};

export default PathOnPageComponent;
