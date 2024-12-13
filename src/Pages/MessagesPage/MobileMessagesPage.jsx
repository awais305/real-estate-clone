import React, { useEffect, useState } from "react";
import "./MobileMessagesPage.scss";
import { RoutePath } from "../../Routes/RoutePaths";
import { useNavigate } from "react-router-dom";
import InboxSection from "./InboxSection/InboxSection";
import { ChatList } from "../../Utils/ChatList";

const MobileMessagesPage = () => {
  const navigate = useNavigate();
  const [selectedChatId, setSelectedChatId] = useState(
    ChatList && ChatList[0].chatId
  );

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 820);
    };

    // Initial check on component mount
    handleResize();

    // Attach the event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Run your code when the screen size is smaller or equal to 820px
    if (isLargeScreen) {
      navigate(RoutePath.DesktopMessagesPage);
    }
  }, [isLargeScreen]);

  return (
    <div className="mobile_messages">
      <InboxSection
        selectedChatId={selectedChatId}
        messagesList={ChatList}
        onChanged={(selectedSender) => {
          setSelectedChatId(selectedSender.chatId);
        }}
        isMobile
      />
    </div>
  );
};

export default MobileMessagesPage;
