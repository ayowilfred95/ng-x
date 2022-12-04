import fullLogo from '../full_logo.png';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link, 
    useRouteMatch,
    useParams 
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';





function Navbar() {
  const navigate = useNavigate();

  const handleClick = async () => {

    navigate("/Signup");
  }

    
      
    return (
      <div className="container mx-auto ">
        <nav className="p-2 w-screen">
          <ul className='flex items-end justify-between py-4 bg-transparent text-[#008753] pr-5'>
          <li className='flex items-end ml-5 pb-2'>
            <Link to="/">
            <img src={fullLogo} alt="" width={120} height={120} className="inline-block -mt-2"/>
            <div className='inline-block font-bold text-xl ml-2'>
              Welcome Page
            </div>
            </Link>
          </li>
          <li className='w-2/6 px-[250px]'>
            <ul className='lg:flex justify-between font-bold mr-10 text-lg'>
                
             <li>
             <button className="enableEthereumButton rounded-full font-[700] text-[18px] hover:bg-[#000000] text-[#008753] font-bold py-2 px-2 rounded text-sm" onClick={handleClick}>Login</button> 
              </li>
            </ul>
          </li>
          </ul>
        </nav>
      </div>
    );
  }

  export default Navbar;
