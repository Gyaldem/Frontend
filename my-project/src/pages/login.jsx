import React from "react";
import LogoGDG from '../img/logoGdg.svg';
import Logo from '../img/logo.svg';
import Monument from '../img/monument.svg';
import Plane from '../img/plane.svg';


function Login() {
    return (
        <div className="h-[100vh] w-[100vw] bg-gray py-6">
            <img src={Logo} alt="Logo" className="mb-6 ml-6" />
            <img src={Monument} alt="Monument" className="absolute bottom-0 lg:w-1/4 md:w-1/3 sm:1/3" />
            <div className="flex flex-col items-center space-y-10 py-15 h-fit">
                <img src={LogoGDG} alt="GDG Logo" />
                <div className="font-bold text-center text-[30px]"> Log-in</div>
                <div>&#123;Unleash Your Creativity, Hack the Future!&#125;</div>
                <div className="flex flex-col space-y-10 lg:w-1/4 md:w-1/3 sm:w-1/2">
                    <input placeholder="E-mail " class="bg-white py-4 px-6 rounded-md lg:w-full md:w-full" />
                    <input placeholder="Password" type="password" class="bg-white py-4 px-6 rounded-md lg:w-full md:w-full sm:w-full" />
                    <button className="px-6 py-4 font-bold text-white rounded-md bg-first lg:w-full md:w-full sm:w-full">
                        Sign up
                    </button>
                </div>


            </div>
            {/* <img src={Plane} alt="Plane" className="w-20" /> */}
        </div>

    )
}

export default Login