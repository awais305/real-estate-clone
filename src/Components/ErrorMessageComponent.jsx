import React from "react";

const ErrorMessageComponent = ({ message, color }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        fontSize: "1.2rem",
        fontWeight: "500",
        color: color || "red",
      }}
    >
      {message}
    </div>
  );
};

export default ErrorMessageComponent;
