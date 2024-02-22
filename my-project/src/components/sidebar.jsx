import React from "react";
import { useLocation } from "react-router-dom";
import LogoGDG from "../img/logoGdg.svg";
import Monument from "../img/monument.svg";
import LogoutIcon from "../img/logout.svg";
import CloseIcon from "../img/close.svg";
import OpenIcon from "../img/open.svg";
import { useNavigate } from "react-router-dom";


const Sidebar = ({ elements, isOpen, toggleSidebar}) => {

  const navigate = useNavigate()
  
  const handleLogout = () => {
      navigate(`/`);
  };
  
  const location = useLocation();
  const currentPath = location.pathname;

  const handleClick = (element) => {
    localStorage.setItem('activeElement', element.title);
    window.location.href = element.link
  };

  return (
    <>
      <div
        className={`h-screen w-64 ${!isOpen} bg-white text-black absolute top-0 left-0 flex flex-col shadow-md transition-all duration-500 ${isOpen ? "" : "transform translate-x-full"
          }`}
        style={{ transform: isOpen ? "translate(0, 0)" : "translate(-100%, 0)", zIndex: 10 }}
      >
        <div className="absolute top-0 right-0 m-4 text-white">
          <button onClick={toggleSidebar}>
            <img src={CloseIcon} alt="Close" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-5 mb-5">
          <img src={LogoGDG} alt="LogoGDG" className="w-auto h-5 mt-10" />
        </div>
        <img
          src={Monument}
          alt="Monument"
          className="absolute bottom-12 w-50"
          style={{ marginRight: "20px", opacity: "0.3" }}
        />
        <div className="absolute bottom-0 w-full pr-5 my-2 text-center">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full"
          >
            <img src={LogoutIcon} alt="Logout" className="w-6 h-6 mr-1" onClick={handleLogout}/>
            Logout
          </button>
        </div>
        <div className="p-4">
          <ul>
            {elements.map((element, index) => (
              <li
                key={index}
                className={`mb-2 py-1.5 pl-2 cursor-pointer transition duration-300 rounded-md ${currentPath === element.link
                  ? "font-bold bg-gray shadow-md"
                  : "hover:shadow-md"
                  }`}
                  onClick={() => handleClick(element)}

              >
                <a href={element.link}>{element.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {!isOpen && (
        <div className="absolute left-0 m-10 text-white top-5" style={{ zIndex: 5 }}>
          <button onClick={toggleSidebar}>
            <img src={OpenIcon} alt="Open" className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
