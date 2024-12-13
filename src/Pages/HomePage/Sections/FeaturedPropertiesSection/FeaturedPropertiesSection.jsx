import React, { useState } from "react";
import "./FeaturedPropertiesSection.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropertyListItem from "../../../../Components/PropertyListItem/PropertyListItem";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import HomeSectionsHeader from "../../Widgets/HomeSectionsHeader/HomeSectionsHeader";

const FeaturedPropertiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="featured_properties_section">
      <HomeSectionsHeader
        title={"Featured Properties"}
        subtitle={"Enjoy a vibrant lifestyle in a peaceful setting."}
      />
      <div className="tab_container">
        {["Home", "Hotel", "Commercial", "Land"].map((option, index) => (
          <button
            key={index}
            className={`tab_button ${activeIndex === index ? "active" : ""}`}
            onClick={() => {
              setActiveIndex(index);
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="list_wrapper">
        {/* <button className={`back_button`}>
          <ArrowBackIos />
        </button> */}
        <div className="list_container">
          <Slider className="slider" {...settings}>
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
          </Slider>
        </div>
        {/* <button className={`fwd_button`}>
          <ArrowForwardIos />
        </button> */}
      </div>
    </div>
  );
};

export default FeaturedPropertiesSection;
