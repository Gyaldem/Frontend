import React from "react";
import LogoGDG from '../img/logoGdg.svg';
import Logo from '../img/logo.svg';

function NavMentor() {
    return (
        <div className="flex flex-row justify-between p-10">
            <img src={LogoGDG} alt="GDGLogo" className="w-32" />
            <img src={Logo} alt="Logo" className="w-32" />
        </div>

    )
}

export default NavMentor