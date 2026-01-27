import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () =>{
    //Way to access UserContext
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser)
    // let btnName = "Login";
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(
        <div className='flex justify-between bg-pink-300 sm:bg-amber-300'>
            <div className='w-20 ml-2 mt-2'>
                <img src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul className='flex gap-2 mr-2 mt-2'>
                    <li>Online Status: {onlineStatus?"✅":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>                
                    {/* <button className="login" onClick={()=>{btnName="Logout"
                     console.log(btnName)}}>
                        {btnName}
                    </button>  */}
                    <button className="login" onClick={()=>btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")}>
                        {btnNameReact}
                    </button>
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;