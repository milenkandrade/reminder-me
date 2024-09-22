import React from 'react';
import Logo from "../../../assets/svg/bowtie_1.svg";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useAuthStore } from '../../../hooks';

export const Navbar = () => {

    const {startLogout, user } = useAuthStore();
    const userName = user.name;

  return (
    <div className="bg-grayN-600 top-0 start-0 w-full">
        <nav className="flex flex-wrap justify-between items-center py-5 px-6 md:px-10">
            <div className="h-10 flex items-center">
                <img className="w-12 md:w-14 lg:w-16" src={Logo} alt="logo" /><span className='text-grayN-100 text-xl md:text-2xl lg:text-3xl font-semibold ps-2'>Niles</span>
            </div>
            {/* <div className="items-center text-center w-full hidden md:flex md:w-auto animate-fade-down animate-duration-500">
                <ul className="font-medium text-xl text-grayN-100 flex flex-col pt-7 md:flex-row md:pt-0 gap-9 gap-x-5 lg:gap-x-9">
                    <li>
                        <a className="hover:text-grayN-200">Home</a>
                    </li>
                    <li>
                        <a className="hover:text-grayN-200">About</a>
                    </li>
                </ul>
            </div> */}
            <div className="flex items-center justify-center">
                <div className="size-10 md:size-14 bg-grayN-100 font-semibold text-xl md:text-3xl rounded-full flex items-center justify-center">
                    {/* {userName.charAt(0)} */}M
                </div>
                <div className="ps-5 text-grayN-100 cursor-pointer">
                    <button
                        className="block w-full max-w-xs mx-auto bg-grayN-200 hover:bg-grayN-100 focus:bg-grayN-100 text-grayN-600 rounded-lg px-1 py-1 font-semibold"
                        onClick={startLogout}
                    >
                        <RiLogoutBoxRFill className="text-3xl"/>
                    </button>
                </div>
            </div>
        </nav>
    </div>
  )
}
