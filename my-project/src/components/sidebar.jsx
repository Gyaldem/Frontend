import React, { useState } from "react";
import LogoGDG from "../img/logoGdg.svg";
import Monument from "../img/monument.svg";
import LogoutIcon from "../img/logout.svg";
import CloseIcon from "../img/close.svg";
import OpenIcon from "../img/open.svg";

const Sidebar = ({ elements }) => {
  const [activeElement, setActiveElement] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = (element) => {
    setActiveElement(element.link);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <>
      <div
        className={`h-screen w-64 ${!isOpen} bg-white text-black absolute top-0 left-0 flex flex-col shadow-md transition-all duration-500 ${isOpen ? "" : "transform translate-x-full"
          }`}
        style={{ transform: isOpen ? "translate(0, 0)" : "translate(-100%, 0)", zIndex: 10 }}
      >
        <div className="absolute top-0 right-0 m-4 text-white">
          <button onClick={handleClose}>
            <img src={CloseIcon} alt="Close" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mb-10">
          <img src={LogoGDG} alt="LogoGDG" className="w-auto h-5 mt-20" />
        </div>
        <img
          src={Monument}
          alt="Monument"
          className="absolute bottom-12 w-50"
          style={{ marginRight: "20px", opacity: "0.3" }}
        />
        <div className="absolute bottom-0 w-full pr-5 my-3 text-center">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full"
          >
            <img src={LogoutIcon} alt="Logout" className="w-6 h-6 mr-1" />
            Logout
          </button>
        </div>
        <div className="p-4">
          <ul>
            {elements.map((element, index) => (
              <li
                key={index}
                className={`mb-2 py-1.5 pl-2 cursor-pointer transition duration-300 rounded-md ${activeElement === element.link
                  ? "font-bold bg-gray shadow-md"
                  : "hover:shadow-md"
                  }`}
                onClick={() => handleClick(`element${index + 1}`)}
              >
                <a href={element.link}>{element.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {!isOpen && (
        <div className="absolute left-0 m-10 text-white top-5" style={{ zIndex: 5 }}>
          <button onClick={handleOpen}>
            <img src={OpenIcon} alt="Open" className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
