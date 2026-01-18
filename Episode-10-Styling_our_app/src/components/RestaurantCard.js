import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;

    const {name,cuisines,avgRatingString,cloudinaryImageId,sla:{slaString},costForTwo} =resData?.info

    return(
        <div className='border w-55 h-75 rounded-lg overflow-hidden'>
           <img
           className='w-100 h-20'
           alt='res-logo'
           src={CDN_URL+cloudinaryImageId}/> 
           <div className='mt-2 ml-1'>
            <div className="text-center">
                <strong><h3>{name}</h3></strong>
            </div>
            <h4 className="">{cuisines.join(',')}</h4>
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