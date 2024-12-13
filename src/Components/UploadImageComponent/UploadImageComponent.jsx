import React, { useEffect, useRef, useState } from "react";
import ImageComponent from "../ImageComponent";
import { CameraAlt } from "@mui/icons-material";
import "./UploadImageComponent.scss";

const UploadImageComponent = ({ url }) => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = () => {
    // Handle file change logic here
    const selectedFile = fileInputRef.current?.files[0];
    if (selectedFile) {
      // Perform actions with the selected file
      console.log("Selected file:", selectedFile);
      setSelectedImage(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <div className="row">
      <div className="upload_image_component">
        <div className="icon_and_image">
          <ImageComponent
            className="preview_image"
            src={selectedImage || url}
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <CameraAlt className="upload_image_icon" onClick={handleIconClick} />
        </div>
        <span>Upload Profile Image</span>
      </div>
    </div>
  );
};

export default UploadImageComponent;
