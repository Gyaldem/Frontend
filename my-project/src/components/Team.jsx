import React from "react";
import Fleche from '../Icon/fleche.svg';
import { useNavigate } from "react-router-dom";

function Team({ num, etat }) {
    const navigate = useNavigate()

    const handleClick = () => {
        // Redirect to the desired page
        console.log(`Redirecting to Team${num}`);
        navigate(`/challenge${num}`);
    };

    return (
        <div className="flex flex-row justify-between lg:w-[60%] md:w-[70%] sm:w-[80%] w-[90%] p-6 cursor-pointer rounded-2xl bg-gray text-third shadow-custom" onClick={handleClick}>
            <span>Team{num}</span>
            <span>{etat}</span>
            <img src={Fleche} alt="fleche" />
        </div>
    );
}

export default Team;
