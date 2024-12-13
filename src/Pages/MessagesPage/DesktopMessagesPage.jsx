import React, { useEffect, useState } from "react";
import InboxSection from "./InboxSection/InboxSection";
import "./DesktopMessagesPage.scss";
import ChatDetailSection from "./ChatDetailSection/ChatDetailSection";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../Routes/RoutePaths";
import { ChatList } from "../../Utils/ChatList";

const DesktopMessagesPage = () => {
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState(
    ChatList && ChatList[0].chatId
  );

  const [sender, setSender] = useState(ChatList && ChatList[0]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 820);
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
    if (isSmallScreen) {
      navigate(RoutePath.MobileMessagesPage);
    }
  }, [isSmallScreen]);

  return (
    <div className="messages_page">
      <div className="width_wrapper">
        <div className="messages_container">
          <InboxSection
            selectedChatId={selectedChatId}
            messagesList={ChatList}
            onChanged={(selectedSender) => {
              setSelectedChatId(selectedSender.chatId);
              setSender(selectedSender);
            }}
          />
          <ChatDetailSection
            senderId={sender.senderId}
            senderName={sender.senderName}
            selectedChatId={selectedChatId}
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopMessagesPage;
