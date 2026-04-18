import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../components/Body";


it("Should check the functionality of search input",async ()=>{
    await act(async ()=>(
        render(<BrowserRouter>
        <Body/>
        </BrowserRouter>)
    ));
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target:{value:"Chinese"}});
    const searchButton = screen.getByRole("button",{name:"Search"});
    fireEvent.click(searchButton);
    const resCard = screen.getAllByTestId("resCard");
    expect(resCard.length).toBe(5);
})

it("Should check the top rated restaurant filter",async ()=>{
    await act(async ()=>(
        render(<BrowserRouter>
        <Body/>
        </BrowserRouter>)
    ));
    const topRatedbutton = screen.getByRole("button",{name:"Top Rated Restaurants"});
    fireEvent.click(topRatedbutton);
    const resCard = screen.getAllByTestId("resCard");
    expect(resCard.length).toBe(2);
})