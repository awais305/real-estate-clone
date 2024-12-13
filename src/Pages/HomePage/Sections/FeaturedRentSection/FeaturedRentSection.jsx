import React from "react";
import "./FeaturedRentSection.scss";
import HomeSectionsHeader from "../../Widgets/HomeSectionsHeader/HomeSectionsHeader";
import ListScroller from "../../../../Components/ListScroller/ListScroller";
import PropertyListItem from "../../../../Components/PropertyListItem/PropertyListItem";
import ButtonComponent from "../../../../Components/ButtonComponent";

const FeaturedRentSection = () => {
  return (
    <div className="featured_rent_section">
      <div className="width_wrapper">
        <HomeSectionsHeader
          title={"Featured For Rent"}
          subtitle={"Enjoy a vibrant lifestyle in a peaceful setting"}
        />
        <div className="rent_list_container">
          <ListScroller itemWidth={252} itemsToScroll={3}>
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
          </ListScroller>
        </div>
        <ButtonComponent text={"See More"} width={"120px"} height={"42px"} />
      </div>
    </div>
  );
};

export default FeaturedRentSection;
