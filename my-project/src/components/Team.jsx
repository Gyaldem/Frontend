import React from "react";
import Fleche from '../Icon/fleche.svg';

function Team({ num, etat }) {
    return (
        <div className="flex flex-row justify-between lg:w-[60%] md:w-[70%] sm:w-[80%] w-[90%] p-6 cursor-pointer rounded-2xl bg-gray text-third ">
            <span>Team{num}</span>
            <span>{etat}</span>
            <img src={Fleche} alt="fleche" />
        </div>
    )
}

export default Team