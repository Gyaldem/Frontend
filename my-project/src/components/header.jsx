import React from "react";
import Logo from "../img/logo.svg";

const Header = ({ isOpen, activeElement }) => {
    console.log("active : ",activeElement)
  return (
    <div className={`header flex justify-between py-11 px-6 bg-gray text-black ${isOpen ? "ml-64 " : "ml-0"} items-center`}
    >
      <div className="mt-4 ml-12">{activeElement}</div>
      <div>
        <img src={Logo} alt="Logo" className="w-28h-5 " />
      </div>
    </div>
  );
};

export default Header;
