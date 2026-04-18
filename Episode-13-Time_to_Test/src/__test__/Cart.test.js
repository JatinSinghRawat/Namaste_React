import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { Provider } from "react-redux";
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>
    Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA)
    })
)

it("Should check the functionality of cart component",async ()=>{
    await act(async ()=>render(
        <BrowserRouter> 
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
            <Cart/>
        </Provider>
        </BrowserRouter>
    ))
    const menuItem = screen.getByText("Sandwiches(7)");
    fireEvent.click(menuItem);
    const getAllItems = screen.getAllByTestId("foodItems");
    expect(getAllItems.length).toBe(7);
    const Addbtns = screen.getAllByRole("button",{name:"Add +"});
    fireEvent.click(Addbtns[0]);
    //render header to check cart items text get 1 in header
    // Cart text is split across nested elements (<a> + <strong>),
// so use role-based query and check full textContent instead of exact getByText.
//as it rendered like below
{/* <a href="/cart">
  Cart
  <strong>- 1 items</strong>
</a> */}
// Why waitFor Needed  Here?
// After:
// fireEvent.click(Addbtns[0]);
// this happens:
// Dispatch Redux action
// Store updates
// Connected component re-renders
// Header receives new state
// DOM updates
// That may not complete before your next line runs.

// Without waitFor
// fireEvent.click(button);
// expect(...); // may run too early
// Possible failure:
// DOM still shows old cart count.

// With waitFor
// await waitFor(() => {
//   expect(screen.getByRole("link", { name: /cart/i }))
//     .toHaveTextContent(/1\s*items/);
// });

// You’re saying:
// “Keep checking until header reflects updated cart count.”
    await waitFor(() => {
  expect(screen.getByRole("link", { name: /cart/i }))
    .toHaveTextContent(/1\s*items/);
});

//Now we will test the cart component
//since we have 7 element inside Sandwiches accordion and the cart is also rendered in the screen
// and we have added 1 element in cart so now we have total 8 elements
expect(screen.getAllByTestId("foodItems").length).toBe(8);
const clearCartBtn = screen.getByRole("button",{name:"Clear Cart"});
fireEvent.click(clearCartBtn);
await waitFor(()=>{expect(screen.getAllByTestId("foodItems").length).toBe(7)});
})