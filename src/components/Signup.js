import  react from "react";
import { useNavigate } from 'react-router-dom';


function Signup() {
    const navigate = useNavigate();
  
const handleSubmit = async()=>{
  navigate("/Login");
}


    return(
         <div className=" shadow-[20px_57px_80px_75px_rgba(0,0,0,0.25)] container mx-auto rounded">
              <div className="  flex item-stretch  grid grid-cols-1 py-[250px]  place-items-center " >
            <h1 className=" text-[#008753] font-['Inter']  leading-[40px] font-[900] text-[32px] " >Connect Wallet</h1>
            <h1  className=" text-[#7B7B7B] py-[20px] font-[600] text-[18px] leading-[23px]  " >connect your wallet to get started</h1>
             <button className=" w-[178px]   rounded-full-[12px] h-[56px]  text-center text-[#ffffff] bg-[#008753] rounded-[8px]  text-[18px] leading-[23px] " onClick={handleSubmit}>Connet Wallet</button>
             <div className=" py-[30px] " >
             <button className=" w-[178px]   rounded-full-[12px] h-[56px]  text-center text-[#ffffff] bg-[#008753] rounded-[8px]  text-[18px] leading-[23px] " onClick={handleSubmit}>Dashboard</button>
             </div>
             
        </div>
        </div>

       
      
        
    )

} 
export default Signup;
