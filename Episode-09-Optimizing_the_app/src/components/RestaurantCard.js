import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;

    const {name,cuisines,avgRatingString,cloudinaryImageId,sla:{slaString},costForTwo} =resData?.info

    return(
        <div className='res-card'>
           <img
           className='res-logo'
           alt='res-logo'
           src={CDN_URL+cloudinaryImageId}/> 
           <div className='content'>
            <h3>{name}</h3>
           <h4>{cuisines.join(',')}</h4>
            <h4>{costForTwo}</h4>
           <div className='rating-time'>
            <h4>{avgRatingString === "--"?"No Rating":`${avgRatingString} stars`} </h4>
           <h4>{slaString}</h4>
           </div>
           </div>
    </div>
    );   
}

export default RestaurantCard; 