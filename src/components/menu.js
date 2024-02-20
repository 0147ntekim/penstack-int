import React from "react";

import { RxDashboard } from "react-icons/rx";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbCalendarRepeat } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import profileImg from '../images/profile.jpg'

export default function Links({displayNavLinks}){
    return (
        <div className={`w-full h-[80vh] bg-[#ffffff] px-[25px] pt-[15px] pb-[50px] flex flex-col justify-between z-[1] absolute top-[90px] right-[0] ${displayNavLinks ? 'block':'hidden'}`}>

            <span  className="w-[20%] flex  flex-row justify-between items-center relative">
                <img className="w-[50px] h-[50px] rounded-[50%] relative" src={profileImg} alt="" />
                <div className="absolute w-[15px] h-[15px] bg-[green] rounded-full bottom-[0px] left-[35px] "></div>
                <FaAngleDown />
            </span>
            <div className="w-full h-[60vh]  flex flex-col justify-between">
                <span className="after flex flex-col items-center hover:text-[green] relative cursor-pointer">
                    <RxDashboard className="text-[40px] "/>
                    <h3 className="text-[18px] mt-[7px] font-semibold">Dashboard</h3>
                </span>

                <span className="after flex flex-col items-center hover:text-[green] relative cursor-pointer">
                    <MdOutlineCalendarMonth className="text-[40px]  "/>
                    <h3 className="text-[18px] mt-[7px] font-semibold">My appointment</h3>
                </span>

                <span className="after flex flex-col items-center hover:text-[green] relative cursor-pointer">
                    <TbCalendarRepeat className="text-[40px]  "/>
                    <h3 className="text-[18px] mt-[7px] font-semibold">My waitlists</h3>
                </span>

                <span className="after flex flex-col items-center hover:text-[green] relative cursor-pointer">
                    <IoIosNotificationsOutline className="text-[40px]  "/>
                    <h3 className="text-[18px] mt-[7px] font-semibold">Notifications</h3>
                </span>
            </div>

            
        </div>
    );
}