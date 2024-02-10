import React from "react";
import Cross from '../img/Cross.svg';
import Check from '../img/Check.svg';

function FenetreSub() {
    return (
        <div className="flex flex-col w-1/3 py-5 space-y-6 border rounded-2xl">
            <div><img src={Cross} alt="Cross" className="ml-auto mr-3" /> </div>
            <div className="flex flex-col items-center space-y-6" >
                <span className=""> Confirm your submission </span>
                <div> <img src={Check} alt="Check" className="px-8 py-1 rounded-2xl bg-second" /> </div>
            </div>
        </div>

    )
}

export default FenetreSub