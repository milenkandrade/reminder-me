import React from 'react';
import { format } from 'date-fns';

export const BillCard = ({onClickReminder, card}) => {

    const handleClick = () => {
        return onClickReminder(card);
    }

  return (
    <div onClick={handleClick} className="md:bg-white w-[358px] h-[220px] lg:w-[383px] lg:h-[250px] grid place-content-center rounded-md">
        <div className="border-solid border-2 border-gray-700
                        shadow-[0px_15px_25px_0px_rgba(0,0,0,0.3)] md:shadow-inner
                        grid
                        w-[315px] h-[193px] lg:w-[335px] lg:h-[213px]
                        rounded-md
                        bg-gradient-to-b from-grayN-100 to-grayN-400
                        cursor-pointer
                        transform transition duration-500 hover:scale-110 hover:z-10
                        overflow-hidden">
            <div className="grid grid-cols-6">
                <div className="col-span-5 text-gray-800 text-sm md:text-base ps-4 pt-3 h-1">
                    {card.name}
                </div>
                <div className="col-span-1 my-3 ms-3 h-1">
                    {/* <div className="size-8 rounded-full bg-green-500"/> */}
                </div>
                <div className="col-span-6 border-4 border-gray-700 text-gray-800 text-end text-sm md:text-base h-1">
                    <p className="my-2 pe-1">{card.number}</p>
                </div>                
                <div className="col-span-5 pt-2 px-2 h-1">
                    <hr className="border-4 border-grayN-600" />
                </div>
                <div className="col-span-1 pt-2 px-2 h-1">
                    <hr className="border-4 border-grayN-600" />
                </div>
                <div className="col-span-5 px-2 h-1">
                    <hr className="border-4 border-grayN-600" />
                </div>
                <div className="col-span-1 px-2 h-1">
                    <hr className="border-4 border-grayN-600" />
                </div>
                <div className="col-span-5 px-2 h-1">
                    <hr className="border-4 border-grayN-600" />
                </div>
                <div className="col-span-1 px-2 h-1">
                    <hr className="border-4 border-grayN-600" />
                </div>
                <div className="col-span-6 text-white text-end text-sm md:text-base pe-4">
                    <p className="pe-1">Expires: {format(card.expDate, "PP")}</p>                    
                </div>
                
            </div>
        </div>
    </div>
  )
}
