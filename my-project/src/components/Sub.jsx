import React, { useState } from "react";
import flecheTop from "../img/flecheTop.svg";

function Sub({ link }) {
    const [showInput, setShowInput] = useState(false);
    const [arrowRotation, setArrowRotation] = useState(false);

    const handleClick = () => {
        setShowInput(!showInput);
        setArrowRotation(!arrowRotation);
    };

    return (
        <div className="flex flex-col lg:w-[60%] md:w-[70%] sm:w-[80%] w-[90%] p-4 bg-gray text-third rounded-2xl">
            <div className="flex items-center justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{link}</span>
                <img src={flecheTop} alt="Opened" className={arrowRotation ? "transform rotate-180" : ""} />
            </div>
            {showInput && <input type="text" placeholder="Add a link..." className="p-2 mt-2 border border-gray-300 rounded" />}
        </div>
    );
}

export default Sub;
