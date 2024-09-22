import React from 'react';
import { format } from 'date-fns';

export const LicenceCard = ({onClickReminder, card}) => {
    
    const handleClick = () => {
        return onClickReminder(card);
    }

  return (
    <div onClick={handleClick} className="md:bg-white w-[358px] h-[220px] lg:w-[383px] lg:h-[250px] grid place-content-center rounded-md">
        <div className="border border-gray-300
                        shadow-[0px_15px_25px_0px_rgba(0,0,0,0.3)] md:shadow-inner
                        grid
                        w-[315px] h-[193px] lg:w-[335px] lg:h-[213px]
                        rounded-xl
                        bg-blue-100
                        cursor-pointer
                        transform transition duration-500 hover:scale-110 hover:z-10
                        overflow-hidden">
            <div className="grid grid-cols-6">
                <div className="col-span-5 bg-blue-600 text-white text-sm md:text-base ps-4 pt-4">
                    {card.name}
                </div>
                <div className="col-span-1 pt-2 bg-blue-600 ps-3">
                    {/* <div className="size-8 rounded-full bg-green-500"/> */}
                </div>
                <div className="col-span-6 border-4 border-blue-800 text-gray-800 font-bold text-end text-sm md:text-base h-1"/>
                <div className="row-span-2 col-span-2 h-24 rounded-md bg-white ms-5">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <g data-name="Layer 7" id="Layer_7">
                            <path className="cls-1" d="M19.75,15.67a6,6,0,1,0-7.51,0A11,11,0,0,0,5,26v1H27V26A11,11,0,0,0,19.75,15.67ZM12,11a4,4,0,1,1,4,4A4,4,0,0,1,12,11ZM7.06,25a9,9,0,0,1,17.89,0Z"/>
                        </g>
                    </svg>
                </div>
                <div className="col-span-4 text-sm md:text-base ps-5">
                    {card.number}
                </div>
                <div className="col-span-4 text-sm md:text-base ps-5">
                    Expires: {format(card.expDate, "PP")}
                </div>               
                
                <div className="col-span-6"/>
            </div>
        </div>
    </div>
  )
}
