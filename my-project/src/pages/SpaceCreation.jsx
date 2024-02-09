import React from "react";
import NavMentor from "../Components/NavMentor";
import Equipe from "../Components/Equipe";

function SpaceCreation({ row, col }) {
    const generateEquipes = () => {
        const equipes = [];
        for (let i = 0; i < row; i++) {
            const rowEquipes = [];
            for (let j = 0; j < col; j++) {
                const equipeNum = i * col + j + 1;
                rowEquipes.push(
                    <div className="flex flex-wrap mx-4">
                        <Equipe key={equipeNum} num={equipeNum} />
                    </div>
                );
            }
            equipes.push(
                <div key={i} className="flex my-4">
                    {rowEquipes}
                </div>
            );

        }

        return equipes;
    };

    return (
        <div>
            <NavMentor />
            <span className="px-10"> Mentor's Space </span>
            <div className="flex content-center justify-center">
                <div className="mt-4">
                    {generateEquipes()}
                </div>
            </div>
        </div>
    );
}

export default SpaceCreation;
