import React from "react";
import "./InboxSection.scss";
import TextFieldComponent from "../../../Components/TextFieldComponent";
import { AssetPath } from "../../../Utils/Constants";
import InboxItemWidget from "../Widgets/InboxItemWidget/InboxItemWidget";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../../Routes/RoutePaths";

const InboxSection = ({
  selectedChatId,
  onChanged,
  messagesList,
  isMobile,
}) => {
  const navigate = useNavigate();

  return (
    <div className="inbox_section">
      <span className="title">Messages</span>
      <TextFieldComponent
        className={"searchbox"}
        classNameField={"field"}
        borderColor={"white"}
        backgroundColor={"white"}
        prefixIconPath={AssetPath.searchIcon}
        placeholder={"Search Agents"}
      />
      <div className="chats">
        {messagesList.map((message) => {
          return (
            <InboxItemWidget
              key={message.chatId}
              senderName={message.senderName}
              messagePreview={message.messagePreview}
              onClick={() => {
                onChanged(message);
                if (isMobile) {
                  navigate(
                    RoutePath.MobileMessagesDetailPage.replace(
                      ":chatId",
                      message.chatId
                    ),
                    {
                      state: {
                        sender: message,
                      },
                    }
                  );
                }
              }}
              selected={selectedChatId === message.chatId}
              isOnline={message.isOnline}
              unread={message.unread}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InboxSection;
