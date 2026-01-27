import { useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=23260&catalog_qa=undefined&submitAction=ENTER")
        console.log("data",data);
    //   const json = await data.json();
    }
    useEffect(()=>{
        fetchData();
    },[])
}

export default useRestaurantMenu;