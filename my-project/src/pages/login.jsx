import React from "react";
import LogoGDG from '../img/logoGdg.svg';
import Logo from '../img/logo.svg';
import Monument from '../img/monument.svg';
import Plane from '../img/plane.svg';


function Login() {
    return (
        <div className="h-[100vh]  bg-gray py-6">
            <img src={Logo} alt="Logo" className="ml-6" />
                <img src={Monument} alt="Monument" className="absolute bottom-0 w-1/6" />
                <div className="flex flex-col space-y-10 h-fit items-center py-10">
                    <img src={LogoGDG} alt="GDG Logo" className="w-1/4" />
                    <div className="text-center"> Log-in</div>
                    <div>&#123;Unleash Your Creativity, Hack the Future!&#125;</div>
                    <div className="flex flex-col space-y-10 w-1/4">
                        <input placeholder="E-mail " class="bg-white py-2 px-4 rounded-md w-full" />
                        <input placeholder="Password"type="password" class="bg-white py-2 px-4 rounded-md w-full" />
                    </div>

                    <button class="bg-first text-white font-bold py-2 px-4 rounded-md w-1/4">
                        Sign up
                    </button>
                </div>
                {/* <img src={Plane} alt="Plane" className="w-20" /> */}
            </div> 

    )
}

export default Login



