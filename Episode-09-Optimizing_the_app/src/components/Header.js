import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    console.log("header render");
    // let btnName = "Login";
    const [btnNameReact,setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(
        <div className='header-container'>
            <div className='logo'>
                <img src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul className='nav-links'>
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
                </ul>
            </div>
        </div>
    );
}

export default Header;