import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageComponent = ({
  className,
  src,
  size,
  height,
  width,
  borderRadius,
  onClick,
}) => {
  return (
    <LazyLoadImage
      onClick={onClick}
      className={className || ""}
      alt=""
      effect="blur"
      src={src}
      style={{
        transition: "all ease-in-out 0.5s",
        borderRadius: borderRadius || "50%",
        objectFit: "cover",
        cursor: onClick ? "pointer" : "default",
      }}
      height={size || height}
      width={size || width}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "/no-image.png";
      }}
    />
  );
};

export default ImageComponent;
