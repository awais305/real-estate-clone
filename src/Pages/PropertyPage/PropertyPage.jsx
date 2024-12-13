import React, { useState } from "react";
import "./PropertyPage.scss";
import ContactComponent from "../../Components/ContactComponent/ContactComponent";
import HomeSectionsHeader from "../HomePage/Widgets/HomeSectionsHeader/HomeSectionsHeader";
import PropertyListItem from "../../Components/PropertyListItem/PropertyListItem";
import { Pagination } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FilterbarWidget from "../HomePage/Widgets/FilterbarWidget/FilterbarWidget";

const PropertyPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  let settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="property_page">
        <div className="width_wrapper">
          <div className="slider_container">
            <Slider className="slider" {...settings}>
              <div className="image_container">
                <img className="slider_image" src="/temp/property.png" alt="" />
                <div className="opacity_container" />
              </div>
            </Slider>
            <FilterbarWidget isPropertyFilter />
          </div>
          <HomeSectionsHeader
            title={"Property Listing"}
            subtitle={"There are currently 164,814 properties."}
          />
          <div className="tab_container">
            {["Home", "Hotel", "Commercial", "Land"].map((option, index) => (
              <button
                key={index}
                className={`tab_button ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => {
                  setActiveIndex(index);
                }}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="properties_gridview">
            {Array(10).fill(<PropertyListItem />)}
          </div>
          <Pagination
            sx={{
              "& .MuiPaginationItem-root": {
                marginLeft: "10px",
                borderRadius: "5px",
                fontSize: "15px",
                backgroundColor: "white",
                boxShadow: "1px 1px 10px 0px #00000026",
                fontWeight: "500",
                border: "none",
                "&:hover": {
                  backgroundColor: "var(--hoverColor)",
                },
                "&.Mui-selected": {
                  color: "white",
                  backgroundColor: "var(--primary)",
                  "&:hover": {
                    backgroundColor: "var(--primary)",
                  },
                },
                "&.MuiPaginationItem-ellipsis": {
                  height: "32px",
                },
              },
            }}
            count={10}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
      <ContactComponent />
    </>
  );
};

export default PropertyPage;
