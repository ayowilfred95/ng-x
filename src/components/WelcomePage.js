import Navbar from "./Navbar";
import group17 from '../group_17.png';
import we9 from '../we_9.png';
import we10 from '../we_10.png';
import we11 from '../we_11.png';
import we12 from '../we_12.png';
import we13 from '../we_13.png';
import we14 from '../we_14.png';
import fullLogo from '../full_logo.png';
import facebook from '../facebook_logo.png';
import twitter from '../twitter_logo.png';
import linkedin from '../linkedin_logo.png';
import youtube from '../youtube_logo.png';
import { Navigate } from "react-router";
import Signup from "./Signup";

import { useNavigate } from 'react-router-dom';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link
} from "react-router-dom";




export default function WelcomePage() {
    const navigate = useNavigate();
    let url = "https://youtu.be/54nCDdm4ngo ";

    const handleClick = async() =>{
        navigate("/Signup");
    }

    
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto px-[120px] py-[120px]">
            <img  src={group17} alt="" width={320} height={220} className="inline-block -mt-2  "/>
            <div className="inline-block align-top px-[110px] ">
            <div className="text-left leading-[65px]  text-[54px] font-[900] drop-shawdow-[0_4px_4px_rgba(0,0,0,0.25)] text-[#008753]">
                <h1>Your health record </h1>
                <h1>in one place</h1>
            </div>
           <div className="text-left leading-[20px] text-[16px] text-[#404040]">You don't have to keep creating  new files and health records anytime
               <h1> you visit the hospital. You can now store, manage and access your</h1>
               <h1>  health records anywhere, anytime with NG-X.  </h1>
            </div>
            <div className ="flex items-start font-[600] py-[48px]   rounded-full-[12px] " > 
                <button onClick={handleClick} className=" w-[178px] rounded-full-[12px] h-[56px]  text-center text-[#ffffff] bg-[#008753] rounded-[8px]  text-[18px] leading-[23px]  px-[32px] py[16px]" >Get started  </button>
                <div className=" text-[#008753] px-[24px] flex items-stretch " >
                <Link to={{url}} target="_blank" >See how it works </Link><img src={youtube} alt="" className=" px-[10px] " />
                </div>
                
            </div>

              
            </div>
            </div> 

            <div className=" container mx-auto">
            <div className=" py-[104.24px] px-[313px] "   >
                <p className=" text-center text-[#008753] font-['Inter']  leading-[65px] font-[900] text-[54px]  ">What we offer</p>
            </div>
            <div className=" flex items-stretch ">
            <img src={we9} alt="" className=" px-[120px] py-[30px] " />
            <img src={we10} alt="" className=" px-[40px] py-[30px] " />
            <img src={we11} alt="" className=" px-[24px] py-[30px] " />
            </div>
            <div className=" flex items-stretch ">
            <img src={we13} alt="" className=" px-[312px] py-[32px] " />
            <img src={we14} alt="" className=" px-[24px] py-[30px] " />
            </div>
            </div>

            <div className=" container mx-auto px-[92px] py-[206px] inline-block align-top ">
                <div className=" flex items-stretch ">
                    <div className="px-[122px]" >
                    <h1 className="  -mt-2 text-left leading-[65px] text-[54px] font-[900] text-[#008753] ">How to get started</h1>
                <h1 className="text-left leading-[20px] text-[16px] font-[400] text-[#404040]  font-Source Sans Pro " > Start managing yours and your family health records with NG-X.It is easy to </h1>
                <h1 className="text-left leading-[20px] text-[16px] font-[400] text-[#404040] ">get start.</h1>
                    </div>
                
            
               <div className=" px-[107px] ">
               <img src={we12} alt="" className=" px-[220px] " class="object-none object-left-left-top align-middle items-center "/>
               </div>
              
               


                </div>
                <div className=" px-[15px] py-[32px] ">
                    <ul className=" py-[16px] ">
                    <label className=" leading-[20px] text-[16px] font-[400] font-Source Sans Pro text-[#404040]">
                        <input type="radio" checked class="accent-[#008753]"  ></input>  Signup with your NIN and email address
                        </label>  
                    </ul>
                    
                    <ul className=" py-[16px] ">
                        <label className=" leading-[20px] text-[16px] font-[400] font-Source Sans Pro text-[#404040]">
                        
                        <input type="radio"  checked class=" accent-[#008753]"></input>  Receive your unique ID and access code address
                        </label>
                    
                    </ul>
                    <ul className=" py-[16px] ">
                        <label className=" leading-[20px] text-[16px] font-[400] font-Source Sans Pro text-[#404040]">
                        <input type="radio" checked class="accent-[#008753]"  ></input>  Log in and start using NG-X
                        </label>
                 </ul>
                </div>
                </div>

            <div className="container mx-auto px-[50px] py-[45.35px] ">    
            <ul className='container flex flex-wrap justify-between items-center mx-auto'>
            <li className='flex items-end ml-5 pb-2'>
            <img src={fullLogo} alt="" width={120} height={120} className="inline-block -mt-2"/>
            </li>
            <li className='w-2/6'>
              <ul className='flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-[20px]  md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700'>
                <li className='block py-2 pr-4 pl-3 rounded md:p-0  text-white'>
                <img src={facebook} alt="" width={44} height={44} className="inline-block -mt-2"/>
                </li>              
                <li className='block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent px-[30px] '>
                </li>
                
                <li className='block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent text-white'>
                <img src={twitter} alt="" width={44} height={44} className="inline-block -mt-2"/>
                </li>  
                <li className='block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent text-white'>
                <img src={linkedin} alt="" width={44} height={44} className="inline-block -mt-2"/>
                </li>              
            
              </ul>
            </li>
            </ul>
            </div>



                <div className="px-[120px] py-[24px]">
                <hr class=" py-[2px] my-1 h-px bg-[#008753] border-[1px] " />
                </div>
                 <section >
                 <div className="container mx-auto px-[122px] py-[45.35px] inline-block align-top">
                    <div>
                        <h1 className="leading-[36px] text-[29.9641px] font-[600] font-Inter text-[#008753] " >
                        Newsletter signup
                        </h1>
                    </div>

                    </div>
                    
                 </section>
                
            </div>    
    );
    
    }
