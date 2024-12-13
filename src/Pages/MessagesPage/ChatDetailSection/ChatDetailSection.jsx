import React, { useEffect, useState, useRef } from "react";
import "./ChatDetailSection.scss";
import ChatDetailAppbar from "../Widgets/ChatDetailAppbar/ChatDetailAppbar";
import MessageBubbleWidget from "../Widgets/MessageBubbleWidget/MessageBubbleWidget";
import TextFieldComponent from "../../../Components/TextFieldComponent";
import ErrorMessageComponent from "../../../Components/ErrorMessageComponent";
import { AssetPath } from "../../../Utils/Constants";
import { DetailedChatList } from "../../../Utils/DetailedChatList";

const ChatDetailSection = ({ senderId, senderName, selectedChatId }) => {
  const [selectedChatMessages, setSelectedChatMessages] = useState([]);
  const chatThreadRef = useRef(null);

  useEffect(() => {
    setSelectedChatMessages([]);
    const selectedChat = DetailedChatList.find(
      (chat) => chat.chatId === selectedChatId
    );
    if (selectedChat) {
      setSelectedChatMessages(selectedChat.messages);
    } else {
      setSelectedChatMessages([]);
    }
  }, [selectedChatId]);

  useEffect(() => {
    // Scroll to the end of the chat thread when selectedChatMessages change
    if (chatThreadRef.current) {
      chatThreadRef.current.scrollTop = chatThreadRef.current.scrollHeight;
    }
  }, [selectedChatMessages]);

  return (
    <div className="chat_detail_section">
      <ChatDetailAppbar senderName={senderName} isOnline />
      <div className="chat_thread_wrapper">
        {selectedChatMessages?.length === 0 ? (
          <ErrorMessageComponent message={"No Chat Found"} color={"black"} />
        ) : (
          <div className="chat_thread" ref={chatThreadRef}>
            {selectedChatMessages.map((message) => {
              const isSender = message.sender.userId === 2;
              return (
                <MessageBubbleWidget
                  key={message.messageId}
                  isSender={isSender}
                  message={message.content}
                  timestamp={message.timestamp}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="input_chat">
        <div className="add_file_icon">
          <img src={AssetPath.addIcon} alt="" className="img" />
        </div>
        <TextFieldComponent
          borderColor={"transparent"}
          marginTop={"0"}
          marginBottom={"0"}
          width={"90%"}
          borderRadius={"0px"}
          placeholder={"Type a message here..."}
        />
        <div className="send_icon">
          <img src={AssetPath.sendIcon} alt="" className="img" />
        </div>
      </div>
    </div>
  );
};

export default ChatDetailSection;
