import React from "react";
import GDGLogo from '../img/gdg_logo.svg';
import Logo2 from '../img/logo2.svg';
import Logout from '../img/logout.svg';
import { useNavigate } from "react-router-dom";

function NavMentor2() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/`);
    };

    return (
        <div className="flex flex-row items-center justify-between p-10">

            <img src={GDGLogo} alt="GDGLogo" className="w-10" />
            <div className="flex flex-row space-x-6">
                <img src={Logout} alt="Log out" className="w-8 cursor-pointer" onClick={handleClick}/>
                <img src={Logo2} alt="Logo" className="w-8" />
            </div>
        </div>
    )
}

export default NavMentor2