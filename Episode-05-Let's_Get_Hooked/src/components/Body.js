import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


//Hooks are helpful in making the UI layer and data layer come in sync with each other. Let's say we have 
//a list of restaurants and we want to make a button of top rated restaurant which will filter out the top 
//rated restaurants and show it on UI.
//const filteredList = resList.filter((res)=>res.info.avgRating>4.5); This will not update the UI.

//Here comes the hooks in picture.
//React Hooks are normal utility javascript function as react components has built in state object where react store properties value belong to that component.
//Hooks helps in mainting that state.



const Body = () => {

    //Local state variable: useState will give us a state variable which will be stored in an array.
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    //useState return an array which we have destructured into 2 variable.
    //const arr = useState(resList);
    //const [listOfRestaurants, setListOfRestaurants] = arr;


    //listOfRestaurants will behave like normal JS variable but unlike normal JS variable we can only modify it with
    //setListOfRestaurants functions.
    //Whenever a state variable change then react render the whole component which has the state variable, like Body component will re-render when listOfRestaurants updates.
    //setListOfRestaurants will trigger the Reconciliation algo to update the other update the state varialbe

    //How react works behind the scenes.
    //React uses Reconciliation algorithm also called React Fiber.
    //Suppose we have res-container which has 7 careds and I want my UI to filter it to 3 cards. React will create virtual DOM which is representation of actual DOM and it is kind of like javascript pbkect.
    //Let's say we have body as a functional component. So, this JSX will be converted into React.createElement(which is a JS object) which willl form the virtual DOM.
    //Actual DOM will be th eHTML formed from this element.

    //Now, Diff Algo comes in picture.
    // Diff Algo find the differernce betweeen update virtual DOM and actual DOM as both are JS object so, finding difference between them is easy.
    // It will calculates the difference and update the actual DOM in every render cycle.

    



    return(
        <div className='body'>
           <div className='search'>
              <button onClick={()=>{
                const filteredList = resList.filter((res)=>res.info.avgRating>4.5);
                setListOfRestaurants(filteredList);
              }}>Top Rated Restaurants</button>
           </div>
           <div className='res-container'>
            {listOfRestaurants.map(restaurant=>
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            )}
           </div>
        </div>
     
    );
}

export default Body;