import React from "react";
import Team from "../Components/Team";
import Logo from '../img/logo.svg';
import Sidebar from "../Components/sidebar";
import Coefficient from "../Components/Coefficient";
import Github from "../Components/Github";
import Video from "../Components/Video";
import Figma from "../Components/Figma";
import Feedback from "../Components/Feedback";

function Challenge({ team }) {

    const sidebarElements = [
        { title: "Challenge 1", link: "/" },
        { title: "Chanllenge 2", link: "/challenge 1" },
        { title: "Challenge 3", link: "/challenge 2" },
        { title: "Challenge 4", link: "/challenge 3" }
    ];

    return (
        <div className="w-full h-full">
            <Sidebar elements={sidebarElements} />
            <div className="relative w-full p-10">
                <img src={Logo} alt="Logo" className="absolute right-0 pr-10" />
                <div className="flex flex-col items-center justify-center w-full pt-24 space-y-10 ">
                    <Coefficient team={team} />
                    <div className="flex flex-row space-x-6 ">
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
