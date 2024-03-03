import React from "react";
import { useState, useEffect } from "react";
import Team from "../components/Team";
import Sidebar from "../components/sidebar";
import Header from "../components/header"

function Judge({ teams }) {
    const generateTeams = () => {
        return teams.map((team, index) => (
            <div key={index} className="flex justify-center my-5">
                <Team num={team.num} etat={team.etat} />
            </div>
        ));
    };

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
        <div className="w-full">
            <Header isOpen={isSidebarOpen} activeElement={"Teams"}/> 
            <Sidebar elements={sidebarElements} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="relative w-full p-10">
                <div className="flex justify-center w-full">
                    <div className="w-[100%]">
                        {/* <span>{"Challenge"}</span> */}
                        {generateTeams()}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Judge;
