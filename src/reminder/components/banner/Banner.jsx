import React from 'react';
import Niles from '../../../assets/svg/Niles_1.svg';

export const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-stretch">
        <div className="justify-self-center md:justify-self-end">
            <img className="w-56 md:w-64" src={Niles} alt="logo" />
        </div>
        <div className="justify-self-center md:justify-self-start w-80 md:w-96 p-5 place-content-center ">
            Ah, there you are! Welcome, welcome! It's an absolute pleasure to see you’ve finally decided to join us. I trust the wait was worth every second of my anticipation
        </div>
    </div>
  )
}