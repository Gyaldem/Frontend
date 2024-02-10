import React from "react";
import NavMentor from "../components/NavMentor";

function SpaceCreation({ row, col }) {
    const generateEquipes = () => {
        const equipes = [];
        const totalEquipes = row * col;

        for (let i = 0; i < totalEquipes; i++) {
            equipes.push(
                <div key={i} className="flex items-center justify-center w-20 h-20 mx-4 my-4 font-bold text-center cursor-pointer rounded-2xl bg-first lg:mx-10 lg:w-28 lg:h-28">
                    Team {i + 1}
                </div>
            );
        }

        return equipes;
    };

    return (
        <div>
            <NavMentor />
            <span className="px-10 font-semibold text-third"> Welcome mentor </span>
            <div className="flex flex-wrap content-center justify-center mt-4">
                {generateEquipes()}
            </div>
        </div>
    );
}

export default SpaceCreation;
