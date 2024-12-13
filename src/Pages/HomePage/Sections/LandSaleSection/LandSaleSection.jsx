import React from "react";
import "./LandSaleSection.scss";
import HomeSectionsHeader from "../../Widgets/HomeSectionsHeader/HomeSectionsHeader";
import ListScroller from "../../../../Components/ListScroller/ListScroller";
import PropertyListItem from "../../../../Components/PropertyListItem/PropertyListItem";
import ButtonComponent from "../../../../Components/ButtonComponent";

const LandSaleSection = () => {
  return (
    <div className="land_sale_section">
      <HomeSectionsHeader
        title={"Land For Sale"}
        subtitle={"Enjoy a vibrant lifestyle in a peaceful setting"}
      />
      <div className="sale_list_container">
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
  );
};

export default LandSaleSection;
