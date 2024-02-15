import { GrLocation } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbCalendarRepeat } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import profileImg  from '../images/profile.jpg';




const Navbar = () => {
    return ( 
        <header className="w-full min-h-[10vh] lg:min-h-[12vh] flex items-center border-b-[2px] border-b-gray-50 px-[25px] sm:px-[30px] lg:px-[50px]">
            <nav className="w-full flex flex-row justify-between items-center">
                <div className="w-[80%] sm:w-[90%] lg:w-[40%] flex flex-row justify-between items-center">
                    <h3 className="text-[20px] lg:text-[25px] font-semibold">Logo</h3>

                    <div className="w-[70%] sm:w-[80%] flex flex-row justify-between">
                        <div className="w-[100%] sm:w-[60%] h-[40px] relative border-[1px]  border-gray  rounded-[10px] overflow-hidden">
                            <CiSearch className="text-[20px] absolute top-[11px] sm:top-[10px] sm:left-[3px]"/> 
                            <input name="name" id="id" className="w-[100%] h-full px-[22px] sm:px-[25px]"  type="text" placeholder='Search by illness, provider, specialist'   />
                        </div>
                        
                        
                        <div className="hidden relative sm:block sm:w-[35%] sm:h-[40px] border-[1px]  border-gray  rounded-[10px]">
                            <GrLocation className="absolute top-[12px] left-[3px]"/> 
                            <input name="name" id="ids" className="sm:w-full sm:h-full sm:px-[25px]" type="number" placeholder='Zipcode' />

                        </div>
                        
                        
                    </div>

                </div>


                <div className="hidden  lg:w-[45%] lg:flex flex-row justify-between items-center">
                    <span className="after flex flex-col items-center lg:hover:text-[green] lg:cursor-pointer">
                        <RxDashboard className="text-[20px] "/>
                        <h3 className="lg:text-[14px]  lg:font-semibold">Dashboard</h3>
                    </span>

                    <span className="after flex flex-col items-center lg:hover:text-[green] lg:cursor-pointer">
                        <MdOutlineCalendarMonth className="text-[20px] "/>
                        <h3 className="lg:text-[14px] lg:font-semibold">My appointment</h3>
                    </span>

                    <span className="after flex flex-col items-center lg:hover:text-[green] lg:cursor-pointer">
                        <TbCalendarRepeat className="text-[20px] "/>
                        <h3 className="lg:text-[14px]  lg:font-semibold">My waitlists</h3>
                    </span>

                    <span className="after flex flex-col items-center lg:hover:text-[green] lg:cursor-pointer">
                        <IoIosNotificationsOutline className="text-[20px] "/>
                        <h3 className="lg:text-[14px]  lg:font-semibold">Notifications</h3>
                    </span>

                    <span  className="w-[11%] flex  flex-row justify-between items-center relative">
                        <img className="lg:w-[40px] lg:h-[40px] lg:rounded-[50%]" src={profileImg} alt="" />
                        <div className="lg:absolute lg:w-[15px] lg:h-[15px] lg:bg-[green] lg:rounded-full lg:bottom-[3px] lg:left-[22px] "></div>
                        <FaAngleDown />
                    </span>
                </div>

                <RxHamburgerMenu  className="text-[22px]  lg:hidden"/>

            </nav>
        </header>
    );
}
 
export default Navbar;