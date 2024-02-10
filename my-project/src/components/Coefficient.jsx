import React from "react";

function Coefficient({ team }) {
    return (
        <div className="flex flex-row justify-between w-3/4 px-6 py-5 lg:w-2/3 md:w-2/3 sm:3/4 bg-gray rounded-2xl">
            <span className="font-bold lg:text-xl md:text-xl text-third">{team}</span>
            <button className="px-4 py-2 text-xs text-white bg-second rounded-2xl"> Choose coefficient </button>
        </div>
    )
}

export default Coefficient