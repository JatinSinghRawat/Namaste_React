import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () =>{
    return(
        <div className='main-container'>
         <Header/>
         <Outlet/>{/* <Outlet/> Outlet wil be replaced by the component according to routes in children route */}
        </div>
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
         }
        ],
        errorElement:<Error/>
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
//rendering configuration of Route
root.render(<RouterProvider router={appRouter}/>);