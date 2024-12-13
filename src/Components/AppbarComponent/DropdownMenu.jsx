import React from "react";
import "./DropdownMenu.css";
import { Link, useNavigate } from "react-router-dom";
import { RoutePath } from "../../Routes/RoutePaths";

const DropdownMenu = ({ menuRef, open, setOpen }) => {
  return (
    <div className="menu_container" ref={menuRef}>
      <div className={`dropdown_menu ${open ? "active" : "inactive"}`}>
        <DropdownItem
          setOpen={setOpen}
          to={RoutePath.ProfilePage}
          text={"Profile"}
        />
        <DropdownItem
          setOpen={setOpen}
          to={RoutePath.ChangePasswordPage}
          text={"Change Password"}
        />
        <DropdownItem
          setOpen={setOpen}
          to={RoutePath.PrivacyPolicyPage}
          text={"Privacy Policy"}
        />
        <DropdownItem setOpen={setOpen} to={""} text={"Logout"} />
      </div>
    </div>
  );
};

export default DropdownMenu;

function DropdownItem({ text, to, setOpen }) {
  const navigate = useNavigate();
  return (
    <div
      className="dropdownItem"
      onClick={() => {
        setOpen();
        if (to !== "") {
          navigate(to);
        } else {
          localStorage.removeItem("isSignedIn");
        }
      }}
    >
      {text}
    </div>
  );
}
