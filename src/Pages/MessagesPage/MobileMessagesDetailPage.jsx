import React, { useEffect, useState } from "react";
import "./MobileMessagesDetailPage.scss";
import ChatDetailSection from "./ChatDetailSection/ChatDetailSection";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RoutePath } from "../../Routes/RoutePaths";

const MobileMessagesDetailPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const sender = location.state.sender;
  const chatId = Number(params.chatId);

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

  useEffect(() => {
    console.log("chatId: ", chatId);
  }, [chatId]);

  return (
    <div className="mobile_messages_detail_page">
      <ChatDetailSection
        senderId={sender.senderId}
        senderName={sender.senderName}
        selectedChatId={chatId}
      />
    </div>
  );
};

export default MobileMessagesDetailPage;
