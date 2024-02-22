import React, { useState } from "react";
import flecheTop from "../img/flecheTop.svg";

function Sub({ link }) {
    const [showInput, setShowInput] = useState(false);
    const [arrowRotation, setArrowRotation] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        setShowInput(!showInput);
        setArrowRotation(!arrowRotation);
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className="flex flex-col w-[100%] items-center">
            <div className="flex items-center justify-between cursor-pointer bg-gray lg:w-[60%] md:w-[70%] sm:w-[80%] w-[90%] p-4 text-third rounded-2xl shadow-custom" onClick={handleClick}>
                <span className="font-bold">{link}</span>
                <img src={flecheTop} alt="Opened" className={arrowRotation ? "transform rotate-180" : ""} />
            </div>
            {showInput && <input type="text" placeholder="Add a link..." className="p-4 mt-6 border border-gray rounded lg:w-[55%] md:w-[65%] sm:w-[75%] w-[85%] outline-none" onChange={handleChange} value={inputValue}/>}
        </div>
    );
}

export default Sub;
