import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {loggedInUser}= useContext(UserContext);

    const {name,cuisines,avgRatingString,cloudinaryImageId,sla:{slaString},costForTwo} =resData?.info

    return(
        <div className='border w-55 h-90 rounded-lg overflow-hidden hover:bg-gray-200'>
           <img
           className='w-100 h-30'
           alt='res-logo'
           src={CDN_URL+cloudinaryImageId}/> 
           <div className='mt-2 ml-1 mb-2'>
            <div className="text-center">
                <strong><h3>{name}</h3></strong>
            </div>
            <h4 className="">{cuisines.join(',')}</h4>
            <h4>{costForTwo}</h4>
           <div className='rating-time'>
            <h4>{avgRatingString === "--"?"No Rating":`${avgRatingString} stars`} </h4>
           <h4>{slaString}</h4>
           <h4>User: {loggedInUser}</h4>
           </div>
           </div>
    </div>
    );   
}

export default RestaurantCard; 

//Higher order components
export const withPromotedLabel = (RestaurantCard) =>{
    return (props)=>{
        return(
            <div>
                <label className="bg-gray-700 absolute text-white px-2 rounded-lg overflow-hidden">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}