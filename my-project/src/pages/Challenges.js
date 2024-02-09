import React from "react";
import Team from "../components/Team";
import Logo from "../img/logo.svg";
import Sidebar from "../components/sidebar";

function Challenge() {
  return (
    <div className="w-full">
      <Sidebar elements={sidebarElements} />
      <div className="relative w-full p-10">
        <img src={Logo} alt="Logo" className="absolute right-0 pr-10" />
        <div></div>
      </div>
    </div>
  );
}

export default Challenge;
