import React from "react";
import LogoGDG from '../img/logoGdg.svg';
import Logo from '../img/logo.svg';
import Logout from '../img/logout.svg';
import { useNavigate } from "react-router-dom";

function NavMentor() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/`);
    }
    return (
        <div className="flex flex-row items-center justify-between p-10">

            <img src={LogoGDG} alt="GDGLogo" className="w-36" />

            <div className="flex flex-row space-x-10">

                <div className="flex flex-row items-center space-x-2">
                    <img src={Logout} alt="Log out" className="w-8 cursor-pointer" onClick={handleClick} />
                    <span className="text-[18px]"> Log Out </span>
                </div>

                <img src={Logo} alt="Logo" className="w-28" />
            </div>

        </div>

    )
}

export default NavMentor