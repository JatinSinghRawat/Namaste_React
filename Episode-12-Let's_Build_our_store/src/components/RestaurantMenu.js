import { useEffect, useState } from "react";
import { useParams } from "react-router";
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

const RestaurantMenu = () => {
  // const {resId} = useParams();
  //Custom hook to make the responsibilty of this component only for displaying the data not fetching
  // const resInfo = useRestaurantMenu(resId);
  // console.log("resInfor",resInfo);
  const [restaurantMenu, setRestaurantMenu] = useState(menuMockData);
  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.cards[2]?.card?.card?.info;
  const categories =
    restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const filteredCategories = categories.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );
  const [showIndex, setShowIndex] = useState(null); //We will pass both to child to control the category(for open a single index)
  const dummy = "dummy"; //now I want to pass this data to ItemList(which is child of RestaurantCategory)
  //So I have to pass this data through RestaurantChild as ItemList is not a direct child of RestaurantMenu
  //RestaurantMenu has only RestaurantCategory as direct child.
  //But what if I have thousands or hundreds of component? how will I pass the data.
  const [openIndexes, setOpenIndexes] = useState([]); //To open multiple accordion at a time
  const [isOpen, setIsOpen] = useState(false);
  const openAll = () => {
    const allIndexes = filteredCategories.map((_, index) => index);
    setOpenIndexes(allIndexes);
    setIsOpen(true);
  }; //openAll the indexes
  // const openAllExceptOneIsAlreadyOpened = () => {
  //     const length = filteredCategories.length;
  //     for (let i = 0; i < length; i++) {
  //       toggleCategory(i);
  //     }
  //   };
  const closeAll = () => {
    setOpenIndexes([]);
    setIsOpen(false);
  };
  const toggleCategory = (index) => {
    setOpenIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) //close
          : [...prev, index], //open
    );
  };
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl my-3">{name}</h1>
      <p className="font-bold text-md italic">
        {cuisines.join(",")}-₹{costForTwoMessage}
      </p>
      <div className="flex justify-between mx-42">
        <div className="relative">
          <button
            onClick={isOpen ? closeAll : openAll}
            className="peer cursor-pointer border-2 border-blue-300 font-bold p-2 rounded-lg"
          >
            {isOpen ? "🔼" : "🔽"}
          </button>

          <span
            className="
        absolute -top-10 left-1/2 -translate-x-1/2
        bg-black text-white text-sm px-2 py-1 rounded
        opacity-0 peer-hover:opacity-100
        peer-focus-visible:opacity-100
        transition-opacity whitespace-nowrap
      "
          >
            {isOpen ? "Close All" : "Open All"}
          </span>
        </div>
      </div>

      {/* {filteredCategories.map((category,index)=> <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showList={showIndex === index? true:false}
            setShowIndex={()=>setShowIndex(showIndex === index?null:index)}
            dummy={dummy}Props drilling/>)} */}
      {filteredCategories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          // showList={showIndex === index? true:false}//for single index
          // setShowIndex={()=>setShowIndex(showIndex === index?null:index)}/>)} for single index
          showList={openIndexes.includes(index)}
          toggleCategory={() => toggleCategory(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;


//tooltip functionality
//The core idea (one sentence)

//The tooltip shows on hover because the parent has `group`, and the tooltip listens to `group-hover` to change its opacity.**
//That’s it. Now let’s unpack how.

// 1️⃣ The `group` class (the trigger)
// <div className="relative group">
// * `group` is a **Tailwind utility**
// * It allows **child elements** to react to the **hover state of the parent**
// * Without `group`, `group-hover:*` will NOT work
// Think of it as:
// > “Hey children, watch what happens to me.”

//2️⃣ The tooltip is absolutely positioned (but hidden)
// <span className="
//   absolute -top-10 left-1/2 -translate-x-1/2
//   bg-black text-white text-sm px-2 py-1 rounded
//   opacity-0
// ">
// Key things here:
//`absolute`
// * Removes tooltip from normal layout
// * Lets it float above the button

//`relative` on parent
// <div className="relative group">
// * Makes tooltip position **relative to the button container**
// * Without this → tooltip jumps to the page corner

//3️⃣ Why tooltip is hidden initially
// opacity-0
// * Tooltip is **rendered**
// * But fully transparent → invisible
// * Still exists in the DOM

//4️⃣ The magic line: `group-hover:opacity-100`
// group-hover:opacity-100
// This means:
// > “When **ANYTHING inside the `.group` is hovered**, set opacity to 100%”
// So when you hover:
// * the button ✔
// * or the tooltip itself ✔
//Tooltip becomes visible

//5️⃣ The hover flow (important)
// ### Mouse enters button
// [group] is hovered
// ↓
// group-hover:opacity-100 activates
// ↓
// tooltip becomes visible
// ### Mouse moves from button → tooltip
// Still inside group
// ↓
// tooltip stays visible

// 💡 This prevents flickering
// (tooltip doesn’t disappear when you move onto it)

//6️⃣ Smooth fade-in animation
// transition-opacity
// This tells the browser:
// > “Animate opacity changes instead of jumping instantly”
// So:
// * `opacity: 0 → 1` fades in
// * `opacity: 1 → 0` fades out

//7️⃣ Why it only shows on hover (and not always)

// Because:
// | Condition             | Result                  |
// | --------------------- | ----------------------- |
// | Not hovering `.group` | `opacity-0` → hidden    |
// | Hovering `.group`     | `opacity-100` → visible |
// There is **no JS involved** here at all.
// It’s 100% CSS-driven behavior.


// group-focus-within:opacity-100
//for keyboard users if someone uses tab to come on the button but what it does
// it still shows the tooltip after you clicked the button and move somewhere else
// as it treats mouse-click also for focus

//group-focus-visible:opacity-100
//for only keyboard users as it only trigger when someone uses tab or any other thing from keyboard
//to focus on the button so it is better choice for tooltip


// 3️⃣ Side-by-side comparison
// Feature	                    focus-within	focus-visible
// Triggered by mouse click	      ✅	            ❌
// Triggered by keyboard	        ✅             ✅
// Stays after click	            ✅             ❌
// Good for tooltips	            ❌             ✅
// Good for forms/menus	          ✅             ❌

//What whitespace-nowrap means
// whitespace-nowrap is a Tailwind utility for:
// white-space: nowrap;
// Plain English:
// “Do not allow text to wrap to the next line.”
// 1️⃣ What happens WITHOUT whitespace-nowrap
// Imagine your tooltip text is:
// Open All Categories
// If the tooltip container is narrow, the browser may do this:
// Open All
// Categories


//Why peer is better choice here instead of group
/**
 * `peer` is used when one element (tooltip) needs to react
 * to the state of another element (button).
 *
 * - The button is marked as `peer`
 * - The tooltip listens to the button’s state using:
 *   - `peer-hover:*` → show tooltip on mouse hover
 *   - `peer-focus-visible:*` → show tooltip when focused via keyboard (Tab)
 *
 * Why not `group-focus-visible`?
 * - `focus-visible` applies ONLY to the focused element (button),
 *   not its parent.
 * - `group-focus-visible` would require the parent(div className="relative") to be focused,
 *   which never happens here.
 *
 * `peer` solves this by letting sibling elements
 * react directly to the focused/hovered element.
 */
// group
// “Children react to the parent’s state”
// Parent (.group)
//  ├── Button
//  └── Tooltip (listens to parent)
// Works for:
// hover
// focus-within
// ❌ Fails for focus-visible (parent never focused)

// peer
// “Siblings react to one specific element”
// Button (.peer)  ← state source
// Tooltip         ← reacts to button
// Perfect for:
// tooltips
// labels
// helper text
// error messages