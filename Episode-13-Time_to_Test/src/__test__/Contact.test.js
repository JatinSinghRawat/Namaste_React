import{render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";

//describe is used to make block of test cases so to group them
//We can use it instead of test as it is an alias

describe("Contact Us test cases",()=>{

    it("Should load heading component",()=>{
        render(<Contact/>)
        const heading = screen.getByRole("heading");
        
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load 2 input boxes",() => {
        render(<Contact/>);
        const inputboxes = screen.getAllByRole("textbox");
        expect(inputboxes.length).toBe(2);
    })
    
    it("Should load button inside Contact",()=>{
        render(<Contact/>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })
})
