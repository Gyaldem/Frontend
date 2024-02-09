import React from "react";

function Equipe({ num }) {
    return (
        <div className="flex items-center justify-center text-center lg:w-24 lg:h-24 md:w-14 md:h-10 md:text-xs sm:w-10 sm:h-10 rounded-2xl bg-first">
            Team{num}
        </div>

    )
}

export default Equipe