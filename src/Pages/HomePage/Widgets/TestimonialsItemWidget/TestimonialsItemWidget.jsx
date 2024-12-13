import React from "react";
import "./TestimonialsItemWidget.scss";
import { AssetPath } from "../../../../Utils/Constants";

const TestimonialsItemWidget = () => {
  return (
    <div className="testimonials_item">
      <p className="feedback_msg">
        Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culp qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="client_info_row">
        <img src={AssetPath.profilePicture} alt="" className="client_dp" />
        <div className="client_info">
          <span className="client_name">Isabella Knight</span>
          <span className="client_address">Isabella Knight</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsItemWidget;
