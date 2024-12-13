import React from "react";

const ButtonComponent = ({
  text,
  height,
  width,
  fontSize,
  fontWeight,
  backgroundColor,
  boxShadow,
  textColor,
  assetImage,
  postFixAssetImage,
  borderColor,
  className,
  onClick,
}) => {
  return (
    <button
      className={className}
      style={{
        height: height || "40px",
        width: width || "100%",
        backgroundColor: backgroundColor || "var(--primary)",
        border: borderColor ? `1px solid ${borderColor}` : "none",
        color: textColor || "white",
        display: "flex",
        alignItems: "center",
        boxShadow: boxShadow,
        justifyContent: "center",
        cursor: "pointer",
        fontSize: fontSize || "15px",
        fontWeight: fontWeight || "500",
        borderRadius: "999px",
        transition: "all 0.5s ease",
      }}
      onClick={onClick}
    >
      {assetImage && (
        <img
          src={assetImage}
          height={"15px"}
          alt=""
          style={{
            marginRight: "10px",
          }}
        />
      )}
      {text}
      {postFixAssetImage && (
        <img
          src={postFixAssetImage}
          height={"13px"}
          alt=""
          style={{
            marginTop: "1px",
            marginLeft: "5px",
          }}
        />
      )}
    </button>
  );
};

export default ButtonComponent;
