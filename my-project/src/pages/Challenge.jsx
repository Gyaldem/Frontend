import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Coefficient from "../components/Coefficient";
import Github from "../components/Github";
import Video from "../components/Video";
import Figma from "../components/Figma";
import Feedback from "../components/Feedback";
import Header from "../components/header";

function Challenge({ team }) {

    const sidebarElements = [
        { title: "Challenge 1", link: "/challenge1" },
        { title: "Chanllenge 2", link: "/challenge2" },
        { title: "Challenge 3", link: "/challenge3" },
        { title: "Challenge 4", link: "/challenge4" }
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
        <div className="w-full h-full">
            <Header isOpen={isSidebarOpen} activeElement={activeElement}/> 
            <Sidebar elements={sidebarElements} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />            
            <div className="relative w-full p-10">
                <div className="flex flex-col items-center justify-center w-full space-y-10 ">
                    <Coefficient team={team} />
                    <div className="flex flex-row flex-wrap items-center justify-center">
                        <Github />
                        <Video />
                        <Figma />
                    </div>
                    <Feedback />

                </div>

            </div>
        </div>
    );
}

export default Challenge;
