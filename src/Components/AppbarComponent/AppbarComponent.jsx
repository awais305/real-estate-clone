import { ExpandMoreOutlined } from "@mui/icons-material";
import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutePath } from "../../Routes/RoutePaths";
import { AssetPath } from "../../Utils/Constants";
import ButtonComponent from "../ButtonComponent";
import ImageComponent from "../ImageComponent";
import "./AppbarComponent.scss";
import DropdownMenu from "./DropdownMenu";

const AppbarComponent = ({ isSignedIn, onMouseDown, onClickOpenMenu }) => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  function handleNavbarState() {
    if (showNavbar) {
      setShowNavbar((prevState) => !prevState);
    }
  }

  return (
    <nav className="appbar">
      <img className="appbar_logo" src={AssetPath.fullLogo} alt="" />
      <div className="container">
        <div
          className={`nav_elements ${showNavbar && "active"}`}
          onClick={() => {
            if (open) {
              setOpen(false);
            }
          }}
        >
          {isSignedIn ? (
            <div
              className="user_profile_wrapper"
              onClick={() => {
                setOpen((prevState) => !prevState);
              }}
            >
              <div className="user_profile">
                <ImageComponent
                  className={"profile_image"}
                  src={AssetPath.profilePicture}
                />
                <span className="profile_name">Mohammad Awais</span>
                <div style={{ width: "100%" }} />
                <ExpandMoreOutlined />
                <div style={{ width: "20px" }} />
              </div>
            </div>
          ) : (
            <div className={"appbar_register_login_button"}>
              <ButtonComponent
                width={"136px"}
                text={"Register/Login "}
                backgroundColor={"var(--gray)"}
                textColor={"var(--black)"}
                boxShadow="-1px 1px 10px 0px #00000026"
              />
              <div className="divider" />
            </div>
          )}
          <ul>
            <li>
              <NavLink onClick={handleNavbarState} to={RoutePath.HomePage}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavbarState} to={RoutePath.PropertyPage}>
                Property
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleNavbarState}
                to={RoutePath.MembershipPlanPage}
              >
                Membership Plan
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleNavbarState} to={RoutePath.ContactUsPage}>
                Contact
              </NavLink>
            </li>
          </ul>
          {isSignedIn && (
            <div className={"property_button"}>
              <ButtonComponent
                width={"145px"}
                assetImage={AssetPath.propertyIcon}
                fontSize={"12px"}
                text={"Add Property"}
                boxShadow="-1px 1px 10px 0px #00000026"
                onClick={() => navigate(RoutePath.AddPropertyPage)}
              />
            </div>
          )}
          <div className="contact_us">
            <span>Contact Us</span>
            <div className="tile">
              <img className="icon" src={AssetPath.phoneIcon} alt="" />
              <div className="info">
                <div className="title">Phone Number</div>
                <div className="subtitle number">111 2345 2666</div>
              </div>
            </div>
            <div className="tile">
              <img className="icon" src={AssetPath.emailIcon} alt="" />
              <div className="info">
                <div className="title">Email Address</div>
                <div className="subtitle">
                  2715 Ash Dr. San Jose, South Dakota 83475
                </div>
              </div>
            </div>
          </div>
          <div onMouseDown={(e) => e.stopPropagation()}>
            <DropdownMenu menuRef={menuRef} open={open} />
          </div>
        </div>
        {isSignedIn ? (
          <>
            <div
              className="info_icon marginLeft"
              onClick={() => {
                navigate(RoutePath.NotificationsPage);
              }}
            >
              <img height={"20px"} src={AssetPath.notificationIcon} />
              <div className="text_container">
                <span className="text">9+</span>
              </div>
            </div>
            <div
              className="info_icon"
              onClick={() => {
                navigate(RoutePath.DesktopMessagesPage);
              }}
            >
              <img height={"20px"} src={AssetPath.messagesIcon} />
              <div className="text_container">
                <span className="text">9+</span>
              </div>
            </div>
            <ButtonComponent
              className={"appbar_button"}
              width={"125px"}
              assetImage={AssetPath.propertyIcon}
              fontSize={"12px"}
              text={"Add Property"}
              boxShadow="-1px 1px 10px 0px #00000026"
              onClick={() => navigate(RoutePath.AddPropertyPage)}
            />
            <div className="image" onMouseDown={onMouseDown}>
              <ImageComponent
                src={AssetPath.profilePicture}
                size={"45px"}
                onClick={onClickOpenMenu}
              />
            </div>
          </>
        ) : (
          <>
            <ButtonComponent
              className={"appbar_button"}
              width={"108px"}
              backgroundColor={"var(--gray)"}
              textColor={"var(--primary)"}
              text={"Register"}
              boxShadow="-1px 1px 10px 0px #00000026"
              onClick={() => {
                navigate(RoutePath.RegisterPage);
              }}
            />
            <ButtonComponent
              className={"appbar_button"}
              width={"108px"}
              text={"Login"}
              boxShadow="-1px 1px 10px 0px #00000 026"
              onClick={() => {
                navigate(RoutePath.LoginPage);
              }}
            />
          </>
        )}
        <img
          className="menu_icon"
          src={AssetPath.hamburgerIcon}
          alt=""
          onClick={() => {
            setShowNavbar(!showNavbar);
          }}
        />
      </div>
    </nav>
  );
};

export default AppbarComponent;
