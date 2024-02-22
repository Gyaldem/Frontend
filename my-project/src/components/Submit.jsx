import React from "react";
import SubmitIcon from '../img/submitt.svg';

function Submit() {
    return (
        <div className="flex flex-row items-center justify-center w-32 px-8 py-3 space-x-6 bg-second rounded-2xl" >
            <span className="font-medium text-white">Submit</span>
            <img src={SubmitIcon} alt="Submit" />
        </div>
    )
}

export default Submit