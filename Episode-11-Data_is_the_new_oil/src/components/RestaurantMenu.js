  import { useEffect, useState } from "react";
  import {useParams,} from 'react-router';
import useRestaurantMenu from "../utils/useRestauarantMenu";
import menuMockData from "../utils/menumockdata";
import RestaurantCategory from "./RestaurantCategory";

//Here we want a feature to make the only accordian open which I clicked
//if any other is opened already it should close automatically.
//Before RestaurantCategory has its own state for every category.
//To do this we will pass the props form parent(RestaurantMenu) to the child(RestaurantCategory).
//To achieve this we will control the accordian open & close behaviour in 
// RestaurantMenu by passing props to RestaurantCategory.
//So, now RestaurantMenu is controlling RestaurantCategory, so RestaurantCategory is a controlled component.
//When RestaurantCategory controlling its state itself it was uncontrolled component.

// 👉 The child does NOT need to know the index.
// 👉 The parent already knows the index and binds it to the click handler before passing it down.

// So when you click a category, you’re actually calling a function that already “remembers” its index.

// This happens because of closures in JavaScript.

// What “lifting state up” means here

// Earlier:

// Each RestaurantCategory had its own state (uncontrolled).

// Multiple accordions could be open.

// Now:

// RestaurantMenu holds one single state:

// const [showIndex, setShowIndex] = useState(null);


// Only one category index can be open at a time.

// RestaurantCategory is now a controlled component.

// So:

// Parent = source of truth
// Child = dumb UI component

// Key line that makes everything work 👇
// {filteredCategories.map((category, index) => (
//   <RestaurantCategory
//     key={category?.card?.card?.categoryId}
//     data={category?.card?.card}
//     showList={showIndex === index}
//     setShowIndex={() => setShowIndex(index)}
//   />
// ))}

// 🔥 This line is the magic:
// setShowIndex={() => setShowIndex(index)}


// You are creating a new function for each category.


// Step-by-step: what actually happens
// 1️⃣ Parent renders categories

// For index = 0:

// setShowIndex = () => setShowIndex(0)


// For index = 1:

// setShowIndex = () => setShowIndex(1)


// For index = 2:

// setShowIndex = () => setShowIndex(2)


// Each child gets its own version of setShowIndex.

// 2️⃣ Child doesn’t care about index

// In RestaurantCategory:

// const handleClick = () => {
//   setShowIndex();
// }


// The child:

// Does not know

// Does not need to know

// Which index it is

// It just says:

// “Hey parent, do the thing you told me to do when clicked”

// 3️⃣ Closure remembers the index 🧠

// When this function was created:

// () => setShowIndex(index)


// JavaScript captures index in a closure.

// So later, when the child calls:

// setShowIndex();


// It actually runs:

// setShowIndex(2); // or 0 or 1 — depending on which child

// Why only one accordion opens

// Because in the parent:

// showList={showIndex === index}


// Only one index can match showIndex

// Clicking another category:

// Updates showIndex

// Previous one automatically closes

// ✨ No extra logic needed.


// Why this is called a controlled component

// Because:

// RestaurantCategory cannot open itself

// It only opens when parent says:

// showList === true
// Parent fully controls behavior


// When execution pauses, look at right side → Scopes:

// Local
//   setShowIndex: ƒ ()(RestaurantCategory)

// Closure (RestaurantMenu.js)
//   index: 2
//   setShowIndex: ƒ bound dispatchSetState


// 📌 THIS is the closure.

// Even though you didn’t pass index:

// It exists inside the function’s closure scope

// The browser preserved it

  const RestaurantMenu = ()=>{
    // const {resId} = useParams();
    //Custom hook to make the responsibilty of this component only for displaying the data not fetching
    // const resInfo = useRestaurantMenu(resId);
    // console.log("resInfor",resInfo);
    const [restaurantMenu, setRestaurantMenu] = useState(menuMockData);
    const {name,cuisines,costForTwoMessage} = restaurantMenu?.cards[2]?.card?.card?.info;
    const categories = restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filteredCategories = categories.filter((c)=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    const [showIndex,setShowIndex] = useState(null);//We will pass both to child to control the category
    const dummy = "dummy";//now I want to pass this data to ItemList(which is child of RestaurantCategory)
    //So I have to pass this data through RestaurantChild as ItemList is not a direct child of RestaurantMenu
    //RestaurantMenu has only RestaurantCategory as direct child.
    //But what if I have thousands or hundreds of component? how will I pass the data.
      return(
          <div className="text-center">
            <h1 className="font-bold text-3xl my-3">{name}</h1>
            <p className="font-bold text-md italic">{cuisines.join(",")}-₹{costForTwoMessage}</p>
            {/* {filteredCategories.map((category,index)=> <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showList={showIndex === index? true:false}
            setShowIndex={()=>setShowIndex(showIndex === index?null:index)}
            dummy={dummy}Props drilling/>)} */}
            {filteredCategories.map((category,index)=> <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showList={showIndex === index? true:false}
            setShowIndex={()=>setShowIndex(showIndex === index?null:index)}/>)}
          </div>
      )
  }

  export default RestaurantMenu;