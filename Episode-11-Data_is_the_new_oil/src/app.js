import React,{lazy,Suspense, useEffect,useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
//Dynamic Bundling
//Lazy Loading
//code splitting
//on demand loading
//dynamic import
const Grocery = lazy(()=>import('./components/Grocery'));
//To change the value to the context we will wrap our app in context provider

const AppLayout = () =>{
    const [userName,setUserName] = useState("");
    useEffect(()=>{
        //api called to get the user
        const data = {
            name:"Tony Stark"
        }
        setUserName(data.name);
    },[])
    return(
        // <UserContext.Provider value={{loggedInUser:userName}}>
        // <div className='main-container'>
        // <UserContext.Provider value={{loggedInUser:"Elon Musk"}}>
        //  <Header/>{/*Header will have elon musk and rest of the component has userName if there is some component 
        //  which is not wrapped then will have default value */}
        // </UserContext.Provider>
        //  <Outlet/>{/* <Outlet/> Outlet wil be replaced by the component according to routes in children route */}
        // </div>
        // </UserContext.Provider>
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <div className='main-container'>
         <Header/>
         <Outlet/>{/* <Outlet/> Outlet wil be replaced by the component according to routes in children route */}
        </div>
        </UserContext.Provider>
    );
};

//creating configuration of Route
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
           },
           {
        path:"/about",
        element:<About/>
         },
         {
            path:"/contact",
            element:<Contact/>
         },
         {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>
         },
         {
            path:"/grocery",
            element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
         }
        ],
        errorElement:<Error/>
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
//rendering configuration of Route
root.render(<RouterProvider router={appRouter}/>);