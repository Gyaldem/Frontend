import React from "react";
import Team from "../Components/Team";
import Logo from '../img/logo.svg';

function Judge({ teams, Challenge }) {
    const generateTeams = () => {
        return teams.map((team, index) => (
            <div key={index} className="flex flex-col my-5">
                <Team num={team.num} etat={team.etat} />
            </div>
        ));
    };

    return (
        <div className="relative p-10">
            <img src={Logo} alt="Logo" className="absolute right-0 pr-10" />
            <div className="pt-20">
                <span>{"Challenge"}</span>
                {generateTeams()}
            </div>

        </div>
    );
}

export default Judge;
