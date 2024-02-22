import React from "react";
import { useState, useEffect } from "react";
import Mentor from "../components/Mentor";
import Logo from '../img/logo.svg';
import Sidebar from "../components/Sidebar";
import Modifier from "../img/modifier.svg";
import Header from "../components/header";

function MentorsJudges({ mentors }) {
    const generateMentors = () => {
        return mentors.map((mentor, index) => (
            <div key={index} className="flex justify-center my-5">
                <Mentor nom={mentor.nom} dep={mentor.dep} email={mentor.email} />
            </div>
        ));
    };

    const sidebarElements = [
        { title: "Overview", link: "/" },
        { title: "Submission", link: "/submission" },
        { title: "Mentors and judges", link: "/mentors&judges" },
        { title: "Call Mentor", link: "/Call" }
    ];

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeElement, setActiveElement] = useState(null); // Initialize activeElement state
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    // useEffect hook to retrieve activeElement from localStorage on component mount
    useEffect(() => {
      const storedActiveElement = localStorage.getItem('activeElement');
      if (storedActiveElement) {
        setActiveElement(storedActiveElement);
      }
      localStorage.removeItem('activeElement');
    }, []);

    return (
        <div className="w-full">
            <Sidebar elements={sidebarElements} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />            <div className="relative w-full">
                <div className="h-40 p-10 bg-gray">
                    <img src={Logo} alt="Logo" className="absolute right-0 pr-10" />
                    <img src={Modifier} alt="Modifier" className="absolute pr-10 right-5 top-32" />
                </div>
                <div className="flex justify-center w-full">
                    <div className="w-[100%] pt-10">
                        {generateMentors()}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MentorsJudges;
