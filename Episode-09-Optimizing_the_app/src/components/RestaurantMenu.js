  import { useEffect } from "react";
  import {useParams,} from 'react-router';
import useRestaurantMenu from "../utils/useRestauarantMenu";


  const RestaurantMenu = ()=>{
    const {resId} = useParams();
    //Custom hook to make the responsibilty of this component only for displaying the data not fetching
    const resInfo = useRestaurantMenu(resId);
    console.log("resInfor",resInfo);

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