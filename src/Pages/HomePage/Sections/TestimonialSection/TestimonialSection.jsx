import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomeSectionsHeader from "../../Widgets/HomeSectionsHeader/HomeSectionsHeader";
import TestimonialsItemWidget from "../../Widgets/TestimonialsItemWidget/TestimonialsItemWidget";
import "./TestimonialSection.scss";
import PropertyListItem from "../../../../Components/PropertyListItem/PropertyListItem";

const TestimonialSection = () => {
  let settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
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
    <div className="testimonial_section">
      <HomeSectionsHeader title="Clients Feedback" />
      <div className="testimonials_container_wrapper">
        <div className="testimonials_container">
          <Slider className="slider" {...settings}>
            <TestimonialsItemWidget />
            <TestimonialsItemWidget />
            <TestimonialsItemWidget />
            <TestimonialsItemWidget />
            <TestimonialsItemWidget />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
