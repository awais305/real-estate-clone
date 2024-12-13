import React from "react";

const WidthWrapper = ({ height, flexDirection, children }) => {
  return (
    <div
      style={{
        height: height,
        width: "100%",
        display: "flex",
        flexDirection: flexDirection,
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "var(--maxWidth)",
      }}
    >
      {children}
    </div>
  );
};

export default WidthWrapper;
