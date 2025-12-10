import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () =>{
    console.log("header render");
    // let btnName = "Login";
    const [btnNameReact,setBtnNameReact] = useState("Login");
    return(
        <div className='header-container'>
            <div className='logo'>
                <img src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul className='nav-links'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
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