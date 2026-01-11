  import { useEffect } from "react";
  import {useParams,} from 'react-router';


  const RestaurantMenu = ()=>{
    const {resId} = useParams();

    console.log(resId);
    useEffect(()=>{
      fetchMenu();
    },[]);
    //do the fetching and map the data
    const fetchMenu = async ()=>{
      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.63270&lng=77.21980&restaurantId=626148&catalog_qa=undefined&submitAction=ENTER")
      // const json = await data.json();
    }

      return(
          <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h3>Menu</h3>
            <ul>
              <li>Biryani</li>
              <li>Burger</li>
              <li>Dal</li>
            </ul>
          </div>
      )
  }

  export default RestaurantMenu;