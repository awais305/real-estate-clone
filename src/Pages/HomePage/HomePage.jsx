import React from "react";
import "./HomePage.scss";
import FeaturedPropertiesSection from "./Sections/FeaturedPropertiesSection/FeaturedPropertiesSection";
import HomeSaleSection from "./Sections/HomeSaleSection/HomeSaleSection";
import LandingSection from "./Sections/LandingSection/LandingSection";
import MainFocusSection from "./Sections/MainFocusSection/MainFocusSection";
import FeaturedRentSection from "./Sections/FeaturedRentSection/FeaturedRentSection";
import LandSaleSection from "./Sections/LandSaleSection/LandSaleSection";
import ContactSectionHome from "./Sections/ContactSectionHome/ContactSectionHome";
import ContactComponent from "../../Components/ContactComponent/ContactComponent";
import TestimonialSection from "./Sections/TestimonialSection/TestimonialSection";

const HomePage = () => {
  return (
    <>
      <LandingSection />
      <div className="home_page">
        <div className="width_wrapper">
          <TrustedCompanies
            text={"Trusted by over 150+ major companies"}
            companiesList={companies}
          />
          <FeaturedPropertiesSection />
          <p className="gray_button_heading">Our Services</p>
          <MainFocusSection />
          <HomeSaleSection />
        </div>
      </div>
      <FeaturedRentSection />
      <div className="home_page">
        <div className="width_wrapper">
          <LandSaleSection />
          <ContactSectionHome />
          <p className="gray_button_heading">Our Testimonials</p>
          <TestimonialSection />
        </div>
      </div>
      <ContactComponent />
    </>
  );
};

export default HomePage;

const TrustedCompanies = ({ text, companiesList }) => {
  return (
    <div className="trusted_companies">
      <p className="text">{text}</p>
      <div className="container_wrapper">
        <div className="images_container">
          {companiesList.map((companyImage, index) => (
            <img
              key={index}
              src={companyImage}
              alt=""
              className="company_image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PageWrapper = ({ children }) => {
  return (
    <div className="home_page">
      <div className="width_wrapper">{children}</div>
    </div>
  );
};

const companies = [
  "/temp/estate1.png",
  "/temp/estate2.png",
  "/temp/estate3.png",
  "/temp/estate4.png",
  "/temp/estate5.png",
  "/temp/estate6.png",
];
