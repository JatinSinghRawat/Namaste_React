import { LOGO_URL } from "../utils/constants";

const Header = () =>{
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
                </ul>
            </div>
        </div>
    );
}

export default Header;