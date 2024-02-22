import React, { useState } from "react";
import { useEffect } from "react";
import NavMentor from "../components/NavMentor";
import NavMentor2 from "../components/NavMentor2";
import Cross from '../img/cross.svg';
import Check from '../img/Check.svg';

function SpaceCreation({ row, col }) {

    const [showPopUp, setShowPopUp] = useState(false);
    const [show, setShow] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    /************************************************************/
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsSmallScreen(mediaQuery.matches);
        const handler = (e) => setIsSmallScreen(e.matches);
        mediaQuery.addListener(handler);
        return () => mediaQuery.removeListener(handler);
    }, []);

    /************************************************************/
    const handleShow = () => {
        setShow(false)
    };

    /************************************************************/
    const handleTeamClick = (event) => {
        const element = event.target;

        const computedStyle = window.getComputedStyle(element);

        //Récuperer la couleur de background
        const bg = computedStyle.backgroundColor;
        console.log(bg)

        //Vérification
        if (bg === "rgb(255, 134, 0)") {
            console.log("La couleur de l'élément est orange.")
            //Traitement
            element.style.backgroundColor = "rgb(174, 184, 254)"
            setShowPopUp(true)
            setShow(true)
        }
        else {
            console.log("La couleur n'est pas orange!")
        }
    };

    /************************************************************/
    const generateEquipes = () => {
        const equipes = [];
        const totalEquipes = row * col;

        for (let i = 0; i < totalEquipes; i++) {
            equipes.push(
                <div
                    key={i}
                    className="flex items-center justify-center w-20 h-20 mx-4 my-4 font-bold cursor-pointer text-text-center rounded-2xl bg-orange lg:w-28 lg:h-28"
                    onClick={handleTeamClick} // Ajout du gestionnaire d'événements onClick
                >
                    Team {i + 1}
                </div>
            );
        }

        return equipes;
    };

    return (
        <div>
            {isSmallScreen ? <NavMentor2 /> : <NavMentor />}
            <span className="px-10 text-xl"> Welcome mentor! </span>
            <div className="flex flex-wrap content-center justify-center mt-8">
                {generateEquipes()}
            </div>
            {showPopUp && show &&
                <div className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-xs ">
                    <div className="flex flex-col w-1/3 px-4 py-5 space-y-6 bg-white border lg:w-1/4 rounded-2xl">
                        <div onClick={handleShow}>
                            <img src={Cross} alt="Cross" className="ml-auto mr-3" />
                        </div>
                        <div className="flex flex-col items-center space-y-6" >
                            <span className="text-center"> You will satisfy team’s needs </span>
                            <div onClick={handleShow}>
                                <img src={Check} alt="Check" className="px-8 py-1 rounded-2xl bg-second" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default SpaceCreation;
