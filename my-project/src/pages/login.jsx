import LogoGDG from '../img/logoGdg.svg';
import Logo from '../img/logo.svg';
import Monument from '../img/monument.svg';
import { useState } from 'react';
import axios from 'axios';

// http://localhost:3000/delete
function Login() {
    const [Email , setEmail]= useState('');
    const [Password, setPassword]= useState('');
    const SignUp= async()=>
    {
        const user ={email : Email , password : Password} ;
        
        axios.get('http://localhost:3000/login',user)
        .then(response => {
          console.log('Response:', response.data);
        })
        .catch(error => {
          console.error('here is the error:', error.message); // Log the error message
        });

        console.log('voila lutilfgddfgfdgdfgfgisateur' ,  user);
  console.log('here are the email and the pasword : ' + Email , Password ) ;
    }
    return (
        <div className="h-[100vh] w-[100vw] bg-gray py-6">
            <img src={Logo} alt="Logo" className="mb-6 ml-6" />
            <img src={Monument} alt="Monument" className="absolute bottom-0 lg:w-1/4 md:w-1/3 sm:1/3" />
            <div className="flex flex-col items-center space-y-10 py-15 h-fit">
                <img src={LogoGDG} alt="GDG Logo" />
                <div className="font-bold text-center text-[30px]"> Log-in</div>
                <div>&#123;Unleash Your Creativity, Hack the Future!&#125;</div>
                <div className="flex flex-col space-y-10 lg:w-1/4 md:w-1/3 sm:w-1/2">
                    <input  onChange={(e)=>{setEmail(e.target.value) }} placeholder="E-mail " className="bg-white py-4 px-6 rounded-md lg:w-full md:w-full" />
                    <input  onChange={(e)=>
                        {setPassword(e.target.value)}}  placeholder="Password" type="password" className="bg-white py-4 px-6 rounded-md lg:w-full md:w-full sm:w-full" />
                    <button onClick={SignUp} className="px-6 py-4 font-bold text-white rounded-md bg-first lg:w-full md:w-full sm:w-full">
                        Sign up
                    </button>
                </div>


            </div>
            {/* <img src={Plane} alt="Plane" className="w-20" /> */}
        </div>

    )
}

export default Login