import React, { useState } from "react";
import Cross from '../img/cross.svg';
import Check from '../img/Check.svg';

function FenetreSub() {
    const [show, setShow] = useState(true)
    
    const handleShow = () => {
        setShow(false)
    };
    
    return (
        <div className="flex flex-col w-1/4 px-4 py-5 space-y-6 bg-white border px rounded-2xl">
            {show && <div>
                <div onClick={handleShow}>
                    <img src={Cross} alt="Cross" className="ml-auto mr-3" /> 
                </div>
                <div className="flex flex-col items-center space-y-6" >
                    <span className="text-center"> Confirm your submission </span>
                    <div> 
                        <img src={Check} alt="Check" className="px-8 py-1 rounded-2xl bg-second" /> 
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default FenetreSub;
