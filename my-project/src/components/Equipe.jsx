import React from "react";

function Equipe({ num }) {
    return (
        <div className="flex items-center justify-center text-center lg:w-2/3 lg:h-24 rounded-2xl md:w-1/2 bg-first">
            Team{num}
        </div>

    )
}

export default Equipe