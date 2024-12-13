import React, { useEffect, useRef, useState } from "react";
import "./ListScroller.scss";
import PropertyListItem from "../PropertyListItem/PropertyListItem";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const ListScroller = ({ itemWidth, itemsToScroll, children }) => {
  const listContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showForwardButton, setShowForwardButton] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      const isScrollable =
        listContainerRef.current &&
        listContainerRef.current.scrollWidth >
          listContainerRef.current.clientWidth;

      if (isScrollable) {
        setShowForwardButton(true);
        // Do something when the tab items are exceeding the container width
      } else {
        // Do something when the tab items are not exceeding the container width
      }
    };

    checkScrollable(); // Call it directly on startup

    const handleScroll = () => {
      const currentScrollPosition = listContainerRef.current.scrollLeft;
      setScrollPosition(currentScrollPosition);

      // const itemsPerPage = Math.floor(
      //   listContainerRef.current.clientWidth / itemWidth
      // );
      // const currentPage = Math.floor(currentScrollPosition / itemWidth);

      // setCurrentPage(currentPage);
    };

    listContainerRef.current.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      // Ensure that listContainerRef.current is not null before removing the event listener
      if (listContainerRef.current) {
        listContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [itemWidth]); // Include any dependencies needed for your useEffect

  const handleScroll = () => {
    const currentScrollPosition = listContainerRef.current.scrollLeft;
    setScrollPosition(currentScrollPosition);
  };

  const scrollTo = (scrollAmount) => {
    if (listContainerRef.current) {
      const scrollWidth = itemWidth * itemsToScroll;

      const newScrollPosition = scrollPosition + scrollAmount * scrollWidth;

      listContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });

      // Note: Update showForwardButton after the scrollTo is completed
      const newShowForwardButton =
        listContainerRef.current &&
        newScrollPosition <
          listContainerRef.current.scrollWidth -
            listContainerRef.current.clientWidth;
      setTimeout(() => {
        setShowForwardButton(newShowForwardButton);
      }, 250);
    }
  };

  const scrollForward = () => {
    scrollTo(1);
  };

  const scrollBackward = () => {
    scrollTo(-1);
  };

  return (
    <div className="scroll_wrapper">
      <button
        className={`back_button${scrollPosition > 0 ? "" : " hide"}`}
        onClick={scrollBackward}
      >
        <ArrowBackIos />
      </button>
      <div
        ref={listContainerRef}
        className="scroll_container"
        onScroll={handleScroll}
      >
        {children}
      </div>

      <button
        className={`fwd_button${showForwardButton ? "" : " hide"}`}
        onClick={scrollForward}
      >
        <ArrowForwardIos />
      </button>

      {/* Dots Here */}
    </div>
  );
};

export default ListScroller;
