import React from "react";
import "./LoaderComponent.scss";

const LoaderComponent = () => {
  return (
    <div
      style={{
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loader" />
    </div>
  );
};

export default LoaderComponent;
