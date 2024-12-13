import React from "react";
import "./HomeSaleSection.scss";
import HomeSectionsHeader from "../../Widgets/HomeSectionsHeader/HomeSectionsHeader";
import ListScroller from "../../../../Components/ListScroller/ListScroller";
import PropertyListItem from "../../../../Components/PropertyListItem/PropertyListItem";
import ButtonComponent from "../../../../Components/ButtonComponent";

const HomeSaleSection = () => {
  return (
    <div className="home_sale_section">
      <HomeSectionsHeader
        title={"Home For Sale"}
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

export default HomeSaleSection;
