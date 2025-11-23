import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;

    const {name,cuisines,avgRating,cloudinaryImageId,sla:{deliveryTime}} =resData?.info

    return(
        <div className='res-card'>
           <img
           className='res-logo'
           alt='res-logo'
           src={CDN_URL+cloudinaryImageId}/> 
           <div className='content'>
            <h3>{name}</h3>
           <h4>{cuisines.join(',')}</h4>
           <div className='rating-time'>
            <h4>{avgRating} stars</h4>
           <h4>{deliveryTime} minutes</h4>
           </div>
           </div>
    </div>
    );   
}

export default RestaurantCard; 