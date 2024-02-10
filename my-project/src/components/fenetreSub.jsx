import React from "react";
import Cross from '../img/Cross.svg';
import Check from '../img/Check.svg';

function FenetreSub() {
    return (
        <div>
            <img src={Cross} alt="Cross" />
            <span> Confirm your submission </span>
            <img src={Check} alt="Check" />
        </div>

    )
}

export default FenetreSub