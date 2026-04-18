import { render,screen } from "@testing-library/react";
import RestaurantCard, {withPromotedLabel} from "../components/RestaurantCard";
import MOCKDATA from "../mocks/RestaurantCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard with Mock Data",()=>{
    render(<RestaurantCard resData = {MOCKDATA}/>);
    const titleofRestaurant = screen.getByText("Hotel Sai Nath & Sai Restaurant");
    expect(titleofRestaurant).toBeInTheDocument();
})

//Rendering Higher Order component and testing it.
it("Shoud render Promoted Restaurant Card with Mock Data",()=>{
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData = {MOCKDATA}/>);
    const PromotedLabel = screen.getByText("Promoted");
    expect(PromotedLabel).toBeInTheDocument();
})