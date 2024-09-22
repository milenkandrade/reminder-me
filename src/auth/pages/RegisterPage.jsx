import React from 'react';
import Niles from '../../assets/svg/Niles_1.svg';
import { useAuthStore, useForm } from '../../hooks';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword:  '',
    registerPassword2: '',
}

export const RegisterPage = () => {

    const { startRegister, errorMessage } = useAuthStore();

    const { registerEmail, registerName, registerPassword, registerPassword2, onInputChange:onRegisterInputChange } = useForm( registerFormFields );

    const registerSubmit = ( event ) => {
        event.preventDefault();
        if ( registerPassword !== registerPassword2 ) {
            Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error');
            return;
        }

        startRegister({ name: registerName, email: registerEmail, password: registerPassword });
    }

  return (

    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-5xl">
            <div className="md:flex w-full">
                <div className=" md:grid hidden w-1/2 bg-grayN-100 py-10 px-10 place-content-center">
                    <img className="size-80 justify-self-center" src={Niles} alt="Niles" />
                    <p className="text-grayN-600 text-center font-semibold mt-6 px-10">Ah, there you are! Welcome, welcome! It's an absolute pleasure to see you’ve finally decided to join us. I trust the wait was worth every second of my anticipation.</p>
                </div>
                <div className="w-full md:w-1/2 py-10 px-5 md:px-10 place-content-center">
                    <div className="text-center mb-10">
                        <h1 className="font-bold text-2xl text-gray-900">REGISTER</h1>
                    </div>
                    <form onSubmit={ registerSubmit }>
                        <div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label  className="text-xs font-semibold px-1">Name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><FaUser /></div>
                                        <input
                                            type="text"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2  border-gray-200 outline-none focus:border-grayN-600"
                                            placeholder="Marcia"
                                            name="registerName"
                                            value={ registerName }
                                            onChange={ onRegisterInputChange }
                                        />
                                    </div>
                                </div>
                                {/* <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Last name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                        <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith"/>
                                    </div>
                                </div> */}
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label className="text-xs font-semibold px-1">Email</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><MdEmail /></div>
                                        <input 
                                            type="email" 
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-grayN-600" 
                                            placeholder="marcia.andrade.llanos@gmail.com"
                                            name="registerEmail"
                                            value={ registerEmail }
                                            onChange={ onRegisterInputChange }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label className="text-xs font-semibold px-1">Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><RiLockPasswordFill /></div>
                                        <input 
                                            type="password" 
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2  border-gray-200 outline-none focus:border-grayN-600" 
                                            placeholder="************"
                                            name="registerPassword"
                                            value={ registerPassword }
                                            onChange={ onRegisterInputChange }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label className="text-xs font-semibold px-1">Repeat Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><RiLockPasswordFill /></div>
                                        <input 
                                            type="password" 
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2  border-gray-200 outline-none focus:border-grayN-600" 
                                            placeholder="************"
                                            name="registerPassword2"
                                            value={ registerPassword2 }
                                            onChange={ onRegisterInputChange }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button className="block w-full max-w-xs mx-auto bg-grayN-600 hover:bg-grayN-500 focus:bg-grayN-500 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <p className="text-sm font-semibold">
                                        Already have an account?
                                        {/* <a href='' className="text-grayN-600 text-sm font-semibold ps-2 cursor-pointer">
                                            Sign up
                                        </a> */}
                                        <NavLink
                                            className="text-grayN-600 text-sm font-semibold ps-2 cursor-pointer"
                                            to="/login"
                                        >
                                            Login here
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
