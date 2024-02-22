import React from "react";

function Coefficient({ team }) {
    return (
        <div className="flex flex-row justify-between px-6 py-5 lg:w-[65%] md:w-[80%] sm:w-[90%] bg-gray rounded-2xl w-[100%]">
            <span className="font-bold lg:text-xl md:text-xl text-third">{team}</span>
            <button className="px-4 py-2 text-xs text-white bg-second rounded-2xl"> Choose coefficient </button>
        </div>
    )
}

export default Coefficient