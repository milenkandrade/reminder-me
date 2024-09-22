import React from 'react';
import Niles from '../../../assets/svg/Niles_1.svg';

export const Blank = () => {
  return (
    <div className="grid place-content-center h-screen">
        <img className="w-72 md:w-96 justify-self-center" src={Niles} alt="logo" />
        <span className="text-grayN-600 text-2xl md:text-4xl text-center font-semibold">What do you want to remember?</span>
    </div>
  )
}
