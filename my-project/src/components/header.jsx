import React from "react";
import Logo from "../img/logo.svg";

const Header = ({ isOpen, activeElement }) => {
    console.log("active : ",activeElement)
  return (
    <div className={`header flex justify-between py-11 px-6 bg-gray text-black ${isOpen ? "ml-64 " : "ml-0"}`}
    >
      <div className="ml-12 mt-4">{activeElement}</div>
      <div>
        <img src={Logo} alt="Logo" className="w-auto h-5" />
      </div>
    </div>
  );
};

export default Header;
