import React from "react";
import Team from "../Components/Team";
import Logo from '../img/logo.svg';
import Sidebar from "../Components/sidebar";

function Judge({ teams}) {
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

    return (
        <div className="w-full">
            <Sidebar elements={sidebarElements} />
            <div className="relative w-full p-10">
                <img src={Logo} alt="Logo" className="absolute right-0 pr-10" />
                <div className="flex justify-center w-full">
                    <div className="w-[100%] pt-20">
                        {/* <span>{"Challenge"}</span> */}
                        {generateTeams()}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Judge;
