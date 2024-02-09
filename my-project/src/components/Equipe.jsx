import React from "react";

function Equipe({ num }) {
    return (
        <div className="flex items-center justify-center text-center lg:w-24 lg:h-24 rounded-2xl md:w-16 md:h-16 bg-first sm:w-12 sm:h-12 sm:text-xs">
            Team{num}
        </div>

    )
}

export default Equipe