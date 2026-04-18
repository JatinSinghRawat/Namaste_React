import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../utils/appStore";
import Header from "../components/Header";
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";


it("Should load Login button inside Header",()=>{
    render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>);
   const loginButton = screen.getByRole("button",{name:"Login"}); 
   expect(loginButton).toBeInTheDocument();
})


it("Shoud load cart items inside Header",()=>{
    render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>);
    // const Cart = screen.getByText("Cart");
    //what if there are items added in the cart then we can use regex
    const Cart = screen.getByText(/Cart/);
    expect(Cart).toBeInTheDocument();
})

//How to check when we click on login it becomes logout
//fireEvent is used to fire the event like click,etc.
it("Should change login to logout when click",()=>{
    render(<BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>);
    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
})
