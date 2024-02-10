import React from "react";
import Mentor from "../Components/Mentor";
import Logo from '../img/logo.svg';
import Sidebar from "../Components/sidebar";
import Modifier from "../img/modifier.svg";

function Submission({ mentors }) {
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

    return (
        <div className="w-full">
            <Sidebar elements={sidebarElements} />
            <div className="relative w-full">
                <div className="h-40 p-10 bg-gray">
                    <img src={Logo} alt="Logo" className="absolute right-0 pr-10" />
                    <img src={Modifier} alt="Modifier" className="absolute pr-10 right-5 top-32" />
                </div>
                <div className="flex justify-center w-full">
                    <div className="w-[100%] pt-20">
                        {generateMentors()}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Submission;
