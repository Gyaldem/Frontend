import React from "react";
import Linkdin from '../img/linkdin.svg'

function Mentor({ nom, dep, email }) {
    return (
        <div className="flex flex-row justify-between items-center lg:w-[60%] md:w-[70%] sm:w-[80%] w-[90%] p-6 cursor-pointer rounded-2xl bg-gray text-third ">
            <div className="flex flex-col">
                <span className="font-bold">{nom}</span>
                <span className="text-xs">{dep}</span>
            </div>
            <span>{email}</span>
            <img src={Linkdin} alt="Linkdin" />
        </div>

    )
}

export default Mentor