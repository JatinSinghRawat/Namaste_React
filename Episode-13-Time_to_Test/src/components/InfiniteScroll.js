
// What is IntersectionObserver?

// It’s a browser API that watches when an element becomes visible inside the viewport.
// You give it an element to observe, and it tells you when that element enters or leaves the screen.

// observer.observe will observe the element like loaderRef here when it is inside the viewPort
// isIntersecting fires only when the loader div enters the viewport
// On initial render, the loader is usually not visible, so no call
// It becomes visible only after the user scrolls, triggering the call
// If it loads on page load, it means your content isn’t tall enough yet
// This is normal infinite-scroll behavior, not a mistake

// Restaurant card
// Restaurant card
// Restaurant card
// Restaurant card
// ...
// [ loader div is here — BELOW the cards ]

// 📌 If your loader div is visible at page load, that only means one thing:

// 👉 Your restaurant list is too short,
// 👉 So the loader div sits too close to the top,
// 👉 Meaning there’s nothing to scroll.

// In that case, infinite scroll should fire immediately because more data is needed to fill the screen.

// This is how every real infinite-scroll UI behaves (Instagram, YouTube Shorts, etc.):

// If there isn’t enough content to fill the screen, load more immediately.

// After enough data fills, further API calls require scrolling.

    // useEffect(()=>{
    //     console.log("hello");
    //     return () => console.log("bye");
    // },[])  To check for cleaup function which is return functionin useEffect



// # 1) **What is `loaderRef` and why do we use it?**
// `loaderRef` is a React ref that will hold a reference to a **real DOM element**.
// const loaderRef = useRef();
// After rendering:
// <div ref={loaderRef}></div>
// loaderRef.current → the actual <div> element in the DOM.
// ### Why needed?
// `IntersectionObserver` must watch **a real DOM node**.
// React components are not DOM elements, so you must use a ref to access one.

// # 2) **What is `observer.observe(loaderRef.current)`?**
// `observe()` tells the observer:
// > “Watch this specific DOM element. Tell me when it enters or leaves the viewport.”
// observer.observe(loaderRef.current)means:
// * Start tracking visibility of the “loader div”.
// * When that div appears on screen → callback runs.

// # 3) **What are `entries` and why `entries[0]`?**
// IntersectionObserver sends an array of `IntersectionObserverEntry` objects:
// entries = [
//   {
//     isIntersecting: true/false,
//     intersectionRatio: number,
//     target: element,
//     boundingClientRect: {...},
//     ...
//   }
// ]
// In your case, you observe **one element**, so the array always has **one entry**.
// That’s why:
// entries[0]
// refers to the tracking info for that one element.

// # 4) **What is `isIntersecting`?**
// `isIntersecting` is a boolean:
// * `true` → the element is inside the viewport
// * `false` → the element is outside the viewport
// Example:
// if (entries[0].isIntersecting) {
//     onLoadMore();
// Meaning:
// > “If the loader div becomes visible on screen, load more data.”

// # 5) **What is `threshold` and why set it to `1`?**
// `threshold` defines **how much of the element must be visible** before the observer triggers.
// Examples:
// | threshold | Meaning                                     |
// | --------- | ------------------------------------------- |
// | `0`       | Trigger as soon as even 1 pixel is visible  |
// | `0.5`     | Trigger when half of the element is visible |
// | `1`       | Trigger when the entire element is visible  |
// Your config:
// { threshold: 1 }
// means:
// > “Only trigger when the loader div is 100% inside the viewport.”
// Common choice for infinite scroll, so it loads only when scrolling near the bottom fully.

// # 6) **Why do we disconnect the observer?**
// return () => observer.disconnect(); only runs when the component unmounts
// Cleanup for two reasons:
// ### **1. Prevent memory leaks**
// When components unmount or re-render, old observers would remain active.
// ### **2. Prevent multiple observers from stacking**
// Without cleanup, every render would create a new observer → duplicate calls.
// So `disconnect()` simply removes the observer from the DOM and stops listening.

// # 7) **Why use `setPage((p) => p + 1)` and what is `page`?**
// `page` is a **counter that tracks which page of data to load next**.
// You start with:
// const [page, setPage] = useState(1);
// When the user scrolls to the bottom, you load page 1 → then increment:
// setPage((p) => p + 1);
// This means:
// * If page was 1 → becomes 2
// * If page was 2 → becomes 3
// * And so on…
// ### Why needed?
// Most APIs use pagination:
// page=1 → items 0–10  
// page=2 → items 11–20  
// page=3 → items 21–30  
// Without a page counter, you would load the same data repeatedly.

// # 📌 **Summary of Each Part**
// ### **loaderRef**
// Holds the DOM element being observed.
// ### **observer.observe()**
// Starts watching that element for visibility changes.
// ### **entries**
// Array of visibility change events (one per observed element).
// ### **entries[0]**
// The visibility data for the single element we observe.
// ### **isIntersecting**
// Whether the element is currently visible on screen.
// ### **threshold: 1**
// Triggers only when the entire element is in view.
// ### **disconnect()**
// Stops observing when the component unmounts or re-renders.
// ### **setPage((p) => p + 1)**
// Moves to next page of API results to load more data.

import { useEffect,useRef } from "react";

const InfiniteScrollLoader = ({onLoadMore}) =>{
    const loaderRef = useRef();

    useEffect(()=>{
        const observer = new IntersectionObserver((enteries)=>{
            onLoadMore();
            console.log("enteries",enteries);
        })
        observer.observe(loaderRef.current);//this makes the callback function of IntersectionObserver fires
        return () => observer.disconnect()
    },[])

    return <div ref={loaderRef} style={{ height: "40px" }} />;
}

export default InfiniteScrollLoader;