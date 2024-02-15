import penStack from '../images/penStack.jpg';
import { CiSearch } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { IoShieldOutline } from "react-icons/io5";




const Content = () => {
    return ( 
        <div className='ops w-full min-h-[90vh] sm:min-h-[100vh]   flex flex-col justify-between px-[25px] py-[110px] sm:py-[30px]'>
            <div className='up w-full h-[45vh] sm:h-[65vh] lg:h-[70vh] flex flex-col justify-between'>
                <img className='sm:w-[350px] sm:h-[350px] sm:mx-auto' src={penStack} alt="" />

                <span>
                    <h6 className='text-[22px] lg:text-[24px] font-bold'>its a bit empty in here</h6>
                    <p className='text-[16px] lg:text-[18px] font-normal'>You can easily find a practise by using the search bar below</p>
                </span>
            </div>

            <div className='opps w-full lg:w-[90%] lg:mx-auto h-[14vh] sm:h-[20vh] lg:h-[15vh] flex flex-col relative justify-between'>
                <form action='submit' method='Post' className='w-full  relative py-[10px]  h-[60px] flex flex-row border-[3px] border-black rounded-[10px]'>
                    <CiSearch className='absolute top-[20px] lg:left-[8px]'/><input className='w-[65%] lg:w-[40%]  sm:w-[60%] pl-[18px] lg:pl-[30px] border-r-[3px] lg border-r-gray' name='name'  type="text" placeholder="Search by illness, provider, specialist" id="searchBar"/>
                    <GrLocation className='absolute top-[20px] left-[54%] lg:left-[41%]'/><input className='w-[25%] pl-[18px] lg:pl-[30px] border-r-[3px]  border-r-gray' name='name' id='idme' type="number" placeholder='Zipcode' />
                    <IoShieldOutline className='hidden lg:block lg:absolute lg:top-[20px] lg:left-[66%]'/><select className='w-[30%] sm:w-[35%] lg:w-[20%] lg:pl-[30px]' id="idus" >
                        <option className='text-[14px]' value="">choose insurance</option>
                        <option value=""> insure</option>
                        <option value="">insure</option>
                    </select>
                </form>
                

                <span className='w-[20%] lg:w-[10%] h-[40px] lg:absolute lg:left-[88%] lg:top-[5px] sm:h-[50px] flex justify-center rounded-[10px] bg-green-900 items-center mx-auto'>
                    <CiSearch className='text-[30px] text-[#ffffff]'/>
                </span>
            </div>
        </div>
        
    );
}
 
export default Content;