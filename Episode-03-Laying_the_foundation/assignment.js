import React from 'react'
import ReactDOM from 'react-dom/client';
import UserImage from 'url:./user.png';
import LogoImage from 'url:./logo.png';
import SearchIcon from 'url:./search.png'

const Logo = () => (
    <img src={UserImage} alt='Logo' style={{width:100}}></img>
);

const SearchBar = () => (
 <div id="Search">
 <input type='text' placeholder='Search...'></input>
 <button><a href='https://www.google.com/'><img src={SearchIcon}/></a></button>
 </div>
);


const User = () => (
    <img src={LogoImage} alt='User-Avatar' style={{width:100}}></img>
);

const HeadingComponent = () => (
    <div id='container'>
    <User/>
    <SearchBar/> 
    <Logo/>
    </div>    
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);