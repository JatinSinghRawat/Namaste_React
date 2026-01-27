import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, Suspense, useContext } from "react";
import Shimmer from "./Shimmer";
import InfiniteScrollLoader from "./InfiniteScroll";
import {Link} from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredList, setFilteredList] = useState(resList); //Akshay solution to make another state
  //variable so our main list doesn't change and we can use another list to filter.
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  // const [show,setShow] = useState(true); To check for cleaup function which is return function in useEffect
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const {loggedInUser,setUserName}= useContext(UserContext);

//If they don't work check for api as they could be changed

//this function will never work as cookie is a forbidden header which control by browser,
// same goes for origin, referer, sec-fecth-site as browser overrides them so this are not controllable
//_csrf token are tied to cookie origin header so not work
// Swiggy uses AWS WAF:

// Requires dynamic tokens

// Requires same-origin browser context

// Blocks automation and replayed requests

// This happens before your request reaches application logic.
  // const LoadMore = async () => {
  //   try {
  //     const requestBody = {
  //       lat: 28.4031289,
  //       lng: 77.2726212,
  //       nextOffset: "CJhlELQ4KID44Nf8pLPyVDCnEzgD",
  //       widgetOffset: {
  //         NewListingView_category_bar_chicletranking_TwoRows: "",
  //         NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
  //         Restaurant_Group_WebView_SEO_PB_Theme: "",
  //         collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
  //         inlineFacetFilter: "",
  //         restaurantCountWidget: "",
  //       },
  //       filters: {},
  //       seoParams: {
  //         seoUrl: "https://www.swiggy.com/restaurants",
  //         pageType: "FOOD_HOMEPAGE",
  //         apiName: "FoodHomePage",
  //         businessLine: "FOOD",
  //       },
  //       page_type: "DESKTOP_WEB_LISTING",
  //       _csrf: "2jj1Fwl4GBwB-u6pBd6QrLNX119anAxzNhSjoaco",
  //     };
  //     const response = await fetch(
  //       // "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/update"
  //        "https://www.swiggy.com/dapi/restaurants/list/update",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Accept":"*/*",
  //           "Cookie":"__SW=9RqXFQ0jlGi_yd6chooX5piqxxDEGpUJ; _device_id=ce5ff757-e5fd-f3bb-e9d8-aa90765e7753; _gcl_au=1.1.1040662287.1763973015; fontsLoaded=1; userLocation={%22lat%22:28.4820119%2C%22lng%22:77.2170762%2C%22address%22:%22New%20Delhi%2C%20Delhi%20110068%2C%20India%22%2C%22area%22:%22%22%2C%22showUserDefaultAddressHint%22:false}; _guest_tid=8510ae03-3602-4858-aa24-9add1f148310; _sid=ooe26e50-8e4a-4b84-a1e9-b58b4088bd3b; _gid=GA1.2.112317610.1766308242; _ga=GA1.1.745054627.1753673774; aws-waf-token=42544399-6396-467d-8021-9d74711dcc59:BQoAdls/aZX2AAAA:RjyRbOx8OLjpQq1sadO0BQH9A/za9IluR67GSA82zLoGroGRvDw8isD1V5fIE7FKIoEOJn7/hrRjxNUSHuRcZ1CVeF1zws2mtgE0S0VYGCOaaAdczpsQb9ONEDZEvNitqtHTzLo5bGr7+bvcpemEAvE3VjjPRGMWlmFdU5r9RSNpioaB8TSvSM/vvbkQ4DIl8QOTAGRmzZ/hPoC3Ivru9RI52FVm38L81oN/uOcXHR0Lkho/0shJ; _ga_YE38MFJRBZ=GS2.1.s1766308241$o12$g1$t1766308413$j60$l0$h0; _ga_34JYJ0BCRN=GS2.1.s1766308241$o12$g1$t1766308413$j60$l0$h0",
  //           "origin": "https://www.swiggy.com",
  //       "referer": "https://www.swiggy.com/restaurants",
  //       "User-id":0,
  //       "__fetch_req__": "true",
  //       "platform": "dweb"
  //         },
  //         body: JSON.stringify(requestBody),
  //       }
  //     );
  //     const data = await response.json();
  //     const newRestaurants = data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //     setFilteredList((prev) => [...prev, ...newRestaurants]);
  //     setListOfRestaurants((prev)=>[...prev,...newRestaurants]);
  //   } catch (err) {
  //     console.log("errorPOST", err);
  //   }
  // };

  //To get all the restaurant when search is empty my solution
  // useEffect(()=>{
  //     if(searchText === ""){
  //         setListOfRestaurants(resList);
  //     }
  // })

  //If they don't work check the Swiggy api they might have change something
  //Also you need to use the CORS extension/plugin for the cors issue or you cna use cors proxy.io

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     // "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4820119&lng=77.2170762&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const jsonResponse = await data.json();
  //   const restaurants =
  //     ("jsosn",
  //     jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants);
  //   setListOfRestaurants(restaurants);
  //   setFilteredList(restaurants);
  // };

  if(onlineStatus === false){
    return <h1>Looks like you're offline!! Please check your internet connection.</h1>
  }

  // Conditional Rendering: When rendering is done based on some condition
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex gap-2">
        <div className="flex mt-2 mb-2 gap-1">
          <input
            type="text"
            className="border rounded-md ml-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (e.target.value === "") {
                setFilteredList(listOfRestaurants); //my solution if the search beomes empty then
              }
            }}
          />
          <div
            className="border rounded-md bg-green-200 px-2 hover:cursor-pointer"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredRes);
            }}
          >
            Search
          </div>
        </div>
        <input type="text" className="border border-black mt-2 p-2 h-[25px] rounded-lg"
        value={loggedInUser}
        onChange={(e)=>setUserName(e.target.value)}/>
        {/* <button onClick={()=>{setShow(!show)}}>
                    Toggle component
                </button> to check for cleaup functions
                */}
        <div className="border rounded-md px-2 mt-2 mb-2 ml-70">
          <button
            className="hover:cursor-pointer"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setListOfRestaurants(filteredRes);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 ml-2 mt-2">
        {filteredList.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
            {restaurant.info.isPromoted?(<RestaurantCardPromoted resData={restaurant} />):(<RestaurantCard resData={restaurant} />)}</Link>
        ))}
      </div>
      {/* {show && <InfiniteScrollLoader/>} To check for cleaup function which is return function in useEffect*/}
      <Suspense fallback={<Shimmer/>}>
        {/* <InfiniteScrollLoader onLoadMore={LoadMore}/> */}
      </Suspense>
    </div>
  );
};

export default Body;
