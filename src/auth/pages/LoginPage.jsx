import React, { useEffect } from 'react';
import Niles from '../../assets/svg/Niles_1.svg';
import Logo from '../../assets/svg/bowtie_1.svg';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useAuthStore, useForm } from '../../hooks';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';

const loginFormFields = {
    loginEmail: '',
    loginPassword: ''
}

export const LoginPage = () => {

    const { startLogin, errorMessage } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange:onLoginInputChange } = useForm(loginFormFields);

    const loginSubmit = (event) => {
        event.preventDefault();
        startLogin({email: loginEmail, password: loginPassword});
        
    }

    useEffect(() => {
      if(errorMessage !== undefined){
        Swal.fire('Error in authentication', errorMessage, 'error')
      }
    }, [errorMessage])
    
  return (

    <div className="min-w-screen min-h-screen bg-grayN-600 flex items-center justify-center px-5 py-5">
        <div className="bg-grayN-200 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-5xl">
            <div className="md:flex w-full">
                <div className="hidden md:block w-1/2 bg-grayN-100 py-10 px-10 place-content-center ">
                    <img src={Niles} alt="Niles" />
                </div>
                <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                    <div className="text-center mb-10 grid place-content-center">
                        <img className="w-20 md:w-24 lg:w-28 text-center justify-self-center" src={Logo} alt="logo" />
                        <p className='text-grayN-600 font-bold text-base md:text-lg lg:text-xl'>Remind me <span className="text-grayN-600 font-bold text-xl md:text-2xl lg:text-3xl ps-1">Niles</span></p>
                    </div>
                    <form onSubmit={ loginSubmit }>
                        <div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label className="text-grayN-600 text-xs font-semibold px-1">Username or Email</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><FaUser /></div>
                                        <input 
                                            type="text" 
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-grayN-600" 
                                            placeholder="Marcia"
                                            name="loginEmail"
                                            value={ loginEmail }
                                            onChange={ onLoginInputChange }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label className="text-grayN-600 text-xs font-semibold px-1">Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><RiLockPasswordFill /></div>
                                        <input 
                                            type="password"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-grayN-600"
                                            placeholder="************"
                                            name="loginPassword"
                                            value={ loginPassword }
                                            onChange={ onLoginInputChange }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button
                                        type="submit"
                                        className="block w-full max-w-xs mx-auto bg-grayN-600 hover:bg-grayN-500 focus:bg-grayN-500 text-white rounded-lg px-3 py-3 font-semibold"
                                    >
                                        SIGN IN
                                    </button>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <p className="text-sm font-semibold">
                                        Don't have an account?
                                        {/* <a href='' className="text-grayN-600 text-sm font-semibold ps-2 cursor-pointer">
                                            Sign up
                                        </a> */}
                                        <NavLink
                                            className="text-grayN-600 text-sm font-semibold ps-2 cursor-pointer"
                                            to="/register"
                                        >
                                            Sign up
                                        </NavLink>
                                    </p>                                    
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
