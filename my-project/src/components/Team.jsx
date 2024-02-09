import React from "react";
import Fleche from '../Icon/fleche.svg';

function Team({ num, etat }) {
    return (
        <div className="flex flex-row justify-between p-6 cursor-pointer lg:w-2/3 rounded-2xl bg-gray text-third sm:w-1/2 md:w-1/2">
            <span>Team{num}</span>
            <span>{etat}</span>
            <img src={Fleche} alt="fleche" />
        </div>
    )
}

export default Team