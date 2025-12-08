import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, Suspense } from "react";
import Shimmer from "./Shimmer";
import InfiniteScrollLoader from "./InfiniteScroll";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState(); //Akshay solution to make another state
  //variable so our main list doesn't change and we can use another list to filter.
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  // const [show,setShow] = useState(true); To check for cleaup function which is return function in useEffect
  console.log(listOfRestaurants);
  console.log("body render");

//If they don't work check for api as they could be changed

  const LoadMore = async () => {
    try {
      const requestBody = {
        lat: 28.4031289,
        lng: 77.2726212,
        nextOffset: "CJhlELQ4KID44Nf8pLPyVDCnEzgD",
        widgetOffset: {
          NewListingView_category_bar_chicletranking_TwoRows: "",
          NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
          Restaurant_Group_WebView_SEO_PB_Theme: "",
          collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
          inlineFacetFilter: "",
          restaurantCountWidget: "",
        },
        filters: {},
        seoParams: {
          seoUrl: "https://www.swiggy.com/restaurants",
          pageType: "FOOD_HOMEPAGE",
          apiName: "FoodHomePage",
          businessLine: "FOOD",
        },
        page_type: "DESKTOP_WEB_LISTING",
        _csrf: "2jj1Fwl4GBwB-u6pBd6QrLNX119anAxzNhSjoaco",
      };
      const response = await fetch(
        "https://corsprox.io/?url=https://www.swiggy.com/dapi/restaurants/list/update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Cookie":
              "__SW=iIKCo6Dw47NFG5TQv_eEGdx2aBit7S_g; _device_id=684efc20-7853-f416-04f5-d5ae0886e1de; _gcl_au=1.1.907415315.1764362796; fontsLoaded=1; _guest_tid=6381fed3-ac67-42d0-bf4f-0ce61f052259; _sid=oeg39eb3-47ff-405b-9bd5-7ffde681a01c; _gid=GA1.2.520270140.1765017726; dadl=true; userLocation={%22lat%22:28.4031289%2C%22lng%22:77.2726212%2C%22address%22:%22Faridabad%20-%20Gurgaon%20Rd%2C%20Badkhal%20Enclave%2C%20Badkhal%20Village%2C%20Faridabad%2C%20Haryana%2C%20India%22%2C%22area%22:%22%22%2C%22showUserDefaultAddressHint%22:false}; _ga=GA1.1.1191488321.1764362797; aws-waf-token=69f17998-6c6b-4379-a679-3206d2e1bc6e:BQoAgfRWzb0wAAAA:E6Cf2+tJu5nrDzgjAmLf4EGWv1A9nFD96ZEqS92kAxV67wgrKkPh8d3tp+W30FVKpscHgeEWi3fTgIxRIfGa4RLcGEjcp5/7qX1+erlPY1Ly7xcjIvBoyUXEJRTVUjrVW/FbJINFp/uADToBbkp/BJviNeb73bIqR7z0Lag95DJACVODX2W90OVRRiyaPJVcWL8wLBp5G1PM91/k+aqNBWfEWyjo3GTE05gsSP++Td448eJU/113; _ga_YE38MFJRBZ=GS2.1.s1765022820$o3$g1$t1765024224$j60$l0$h0; _ga_34JYJ0BCRN=GS2.1.s1765022821$o3$g1$t1765024224$j60$l0$h0",
            "origin": "https://www.swiggy.com",
        "referer": "https://www.swiggy.com/restaurants",
        "User-id":0,
        "__fetch_req__": "true",
        "platform": "dweb"
          },
          body: JSON.stringify(requestBody),
        }
      );
      const data = await response.json();
      const newRestaurants = data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setFilteredList((prev) => [...prev, ...newRestaurants]);
      setListOfRestaurants((prev)=>[...prev,...newRestaurants]);
    } catch (err) {
      console.log("errorPOST", err);
    }
  };

  //To get all the restaurant when search is empty my solution
  // useEffect(()=>{
  //     if(searchText === ""){
  //         setListOfRestaurants(resList);
  //     }
  // })

  //If they don't work check the Swiggy api they might have change something
  //Also you need to use the CORS extension/plugin for the cors issue or you cna use cors proxy.io

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await fetch(
      "https://corsprox.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonResponse = await data.json();
    const restaurants =
      ("jsosn",
      jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants);
    setListOfRestaurants(restaurants);
    setFilteredList(restaurants);
  };

  // Conditional Rendering: When rendering is done based on some condition
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (e.target.value === "") {
                setFilteredList(listOfRestaurants); //my solution if the search beomes empty then
              }
            }}
          />
          <div
            className="search-button"
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
        {/* <button onClick={()=>{setShow(!show)}}>
                    Toggle component
                </button> to check for cleaup function*/}
        <div className="filterres">
          <button
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

      <div className="res-container">
        {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
      {/* {show && <InfiniteScrollLoader/>} To check for cleaup function which is return function in useEffect*/}
      <Suspense fallback={<Shimmer/>}>
        <InfiniteScrollLoader onLoadMore={LoadMore}/>
      </Suspense>
    </div>
  );
};

export default Body;
