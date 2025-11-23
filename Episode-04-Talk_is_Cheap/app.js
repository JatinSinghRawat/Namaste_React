import React from 'react';
import ReactDOM from 'react-dom/client';



//Inline CSS way to write

//1st way
//Create a javascript variable which store the css property and add it to style attribute of tag
//const stylecard = {
// backgroundColor:"#f0f0f0"
//}

//const RestaurantCard = () => {
// return(
//     <div className='res-card' style={styleCard}>
//     </div>
// )
//}

//2nd way
//We can do it directly
//const RestaurantCard = () => {
// return(
//     <div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
//     </div>
//here the first curly braces represent it is a javascript and second is for to show backgroundColor as js object
// )
//}


const resList = [
{
info: {
id: "151649",
name: "Hotel Sai Nath & Sai Restaurant",
cloudinaryImageId: "vkhcohhmqfczycw9vsar",
locality: "railway station",
areaName: "Chhindwara Locality",
costForTwo: "₹200 for two",
cuisines: [
"North Indian",
"South Indian",
"Chinese",
"Beverages",
"Fast Food",
"Desserts"
],
avgRating: 4.3,
veg: true,
parentId: "101802",
avgRatingString: "4.3",
totalRatingsString: "1.0K+",
sla: {
deliveryTime: 38,
lastMileTravel: 11.3,
serviceability: "SERVICEABLE",
slaString: "35-40 mins",
lastMileTravelString: "11.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-07-29 22:30:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-46f77ad9-a7a4-44b7-8256-78b6428daf68"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
type: "WEBLINK"
}
},
{
info: {
id: "150591",
name: "Satkar Restaurant",
cloudinaryImageId: "rvxp5xbniat84r6efku2",
locality: "Sinchai Colony",
areaName: "Satkar Chowk",
costForTwo: "₹250 for two",
cuisines: [
"South Indian",
"Indian",
"Salads",
"Desserts"
],
avgRating: 4.4,
veg: true,
parentId: "21553",
avgRatingString: "4.4",
totalRatingsString: "3.0K+",
sla: {
deliveryTime: 36,
lastMileTravel: 13.4,
serviceability: "SERVICEABLE",
slaString: "35-40 mins",
lastMileTravelString: "13.4 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-07-29 22:45:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "Rxawards/_CATEGORY-North%20Indian.png",
description: "Delivery!"
},
{
imageId: "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
description: "Delivery!"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Delivery!",
imageId: "Rxawards/_CATEGORY-North%20Indian.png"
}
},
{
attributes: {
description: "Delivery!",
imageId: "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-46f77ad9-a7a4-44b7-8256-78b6428daf68"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
type: "WEBLINK"
}
},
{
info: {
id: "151518",
name: "Bakery World",
cloudinaryImageId: "mt2aggiscfl3yviatwng",
locality: "Parasia Road",
areaName: "Parasia Road",
costForTwo: "₹250 for two",
cuisines: [
"Bakery",
"Ice Cream",
"Snacks",
"Beverages"
],
avgRating: 4.2,
veg: true,
parentId: "40363",
avgRatingString: "4.2",
totalRatingsString: "284",
sla: {
deliveryTime: 40,
lastMileTravel: 14.1,
serviceability: "SERVICEABLE",
slaString: "40-45 mins",
lastMileTravelString: "14.1 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-07-29 22:30:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-46f77ad9-a7a4-44b7-8256-78b6428daf68"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
type: "WEBLINK"
}
},
{
info: {
id: "234875",
name: "Adil Hotel",
cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
locality: "Rautha Wada",
areaName: "Chhindwara Locality",
costForTwo: "₹150 for two",
cuisines: [
"Biryani",
"Tandoor"
],
avgRating: 4.4,
parentId: "27123",
avgRatingString: "4.4",
totalRatingsString: "1.3K+",
sla: {
deliveryTime: 30,
lastMileTravel: 11.5,
serviceability: "SERVICEABLE",
slaString: "25-30 mins",
lastMileTravelString: "11.5 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-07-30 00:00:00",
opened: true
},
badges: { },
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-46f77ad9-a7a4-44b7-8256-78b6428daf68"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
type: "WEBLINK"
}
},
{
info: {
id: "151656",
name: "Dev International",
cloudinaryImageId: "enj3srsnhbltbom2ovvh",
locality: "khajri road",
areaName: "Mohan Nagar",
costForTwo: "₹100 for two",
cuisines: [
"Chinese",
"Fast Food",
"Beverages"
],
avgRating: 4.3,
parentId: "71556",
avgRatingString: "4.3",
totalRatingsString: "551",
sla: {
deliveryTime: 52,
lastMileTravel: 13.6,
serviceability: "SERVICEABLE",
slaString: "50-60 mins",
lastMileTravelString: "13.6 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-07-29 22:30:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "₹100 OFF",
subHeader: "ABOVE ₹299",
discountTag: "FLAT DEAL"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-46f77ad9-a7a4-44b7-8256-78b6428daf68"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
type: "WEBLINK"
}
},
{
info: {
id: "151515",
name: "Gupta Bhojnalay",
cloudinaryImageId: "jo9pdipf4elcuch8g55q",
locality: "fulwara chowk",
areaName: "Chhindwara Locality",
costForTwo: "₹200 for two",
cuisines: [
"Fast Food",
"Indian",
"Beverages"
],
avgRating: 4.8,
veg: true,
parentId: "91635",
avgRatingString: "4.8",
totalRatingsString: "450",
sla: {
deliveryTime: 37,
lastMileTravel: 11.8,
serviceability: "SERVICEABLE",
slaString: "35-40 mins",
lastMileTravelString: "11.8 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-07-29 23:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "₹100 OFF",
subHeader: "ABOVE ₹999",
discountTag: "FLAT DEAL"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-46f77ad9-a7a4-44b7-8256-78b6428daf68"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
type: "WEBLINK"
}
},
{
info: {
id: "625927",
name: "Kathi Junction",
cloudinaryImageId: "nigqvxgzvyxtfjuqasgg",
locality: "Bunglow Madhuvan Colony",
areaName: "Prasia Road",
costForTwo: "₹200 for two",
cuisines: [
"rolls",
"Burgers",
"Pizzas",
"Fast Food"
],
avgRating: 4.2,
parentId: "1935",
avgRatingString: "4.2",
totalRatingsString: "378",
sla: {
deliveryTime: 42,
lastMileTravel: 12.2,
serviceability: "SERVICEABLE",
slaString: "40-45 mins",
lastMileTravelString: "12.2 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-07-29 23:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "₹100 OFF",
subHeader: "ABOVE ₹399",
discountTag: "FLAT DEAL"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-46f77ad9-a7a4-44b7-8256-78b6428daf68"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927",
type: "WEBLINK"
}
},
{
info: {
id: "385824",
name: "The Belgian Waffle Co.",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
locality: "Sinchai Colony",
areaName: "Mohan Nagar",
costForTwo: "₹200 for two",
cuisines: [
"Waffle",
"Desserts",
"Ice Cream",
"Beverages"
],
avgRating: 4.6,
veg: true,
parentId: "2233",
avgRatingString: "4.6",
totalRatingsString: "318",
sla: {
deliveryTime: 43,
lastMileTravel: 13.4,
serviceability: "SERVICEABLE",
slaString: "40-45 mins",
lastMileTravelString: "13.4 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-07-29 22:45:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-46f77ad9-a7a4-44b7-8256-78b6428daf68"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
type: "WEBLINK"
}
},
{
info: {
id: "658210",
name: "The Fusion Lounge",
cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
locality: "Triloki nagar",
areaName: "Railway Station",
costForTwo: "₹300 for two",
cuisines: [
"South Indian",
"Chinese",
"Beverages",
"Fast Food",
"Desserts"
],
avgRating: 4.1,
parentId: "395453",
avgRatingString: "4.1",
totalRatingsString: "355",
sla: {
deliveryTime: 50,
lastMileTravel: 11.9,
serviceability: "SERVICEABLE",
slaString: "50-60 mins",
lastMileTravelString: "11.9 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-07-29 23:00:00",
opened: true
},
badges: { },
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-46f77ad9-a7a4-44b7-8256-78b6428daf68"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
type: "WEBLINK"
}
},
{
info: {
id: "184424",
name: "Sab Ghar Tak Foods",
cloudinaryImageId: "ryzswg44bt7thqzkuaj4",
locality: "Sanchar Colony",
areaName: "Parsia Road",
costForTwo: "₹200 for two",
cuisines: [
"North Indian",
"South Indian",
"Chinese",
"Beverages",
"Fast Food",
"Desserts"
],
avgRating: 4.1,
parentId: "173932",
avgRatingString: "4.1",
totalRatingsString: "617",
sla: {
deliveryTime: 51,
lastMileTravel: 14.1,
serviceability: "SERVICEABLE",
slaString: "50-60 mins",
lastMileTravelString: "14.1 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-07-29 23:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "₹50 OFF",
subHeader: "ABOVE ₹199",
discountTag: "FLAT DEAL"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-46f77ad9-a7a4-44b7-8256-78b6428daf68"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/sab-ghar-tak-foods-sanchar-colony-parsia-road-rest184424",
type: "WEBLINK"
}
},
{
info: {
id: "522144",
name: "Blue Chilli Restaurant",
cloudinaryImageId: "je6qlse8csxgcfpuoybe",
locality: "Ambedkar Nagar",
areaName: "Prasia Road",
costForTwo: "₹150 for two",
cuisines: [
"South Indian",
"Indian",
"Fast Food"
],
avgRating: 4.1,
veg: true,
parentId: "311804",
avgRatingString: "4.1",
totalRatingsString: "226",
sla: {
deliveryTime: 42,
lastMileTravel: 10.9,
serviceability: "SERVICEABLE",
slaString: "40-45 mins",
lastMileTravelString: "10.9 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-07-29 23:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "v1695133679/badges/Pure_Veg111.png",
description: "pureveg"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "pureveg",
imageId: "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "20% OFF",
subHeader: "UPTO ₹120"
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-46f77ad9-a7a4-44b7-8256-78b6428daf68"
},
cta: {
link: "https://www.swiggy.com/city/chhindwara/blue-chilli-restaurant-ambedkar-nagar-prasia-road-rest522144",
type: "WEBLINK"
}
}
]

const Header = () =>{
    return(
        <div className='header-container'>
            <div className='logo'>
                <img src='https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg'/>
            </div>
            <div className='nav-items'>
                <ul className='nav-links'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>                    
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props) =>{
    const {resData} = props;

    const {name,cuisines,avgRating,cloudinaryImageId,sla:{deliveryTime}} =resData?.info
    // The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.
    //sla:{deliveryTime} is nested destructuring
    // as deliveryTime is inside sla which is inside info which is inside resData

    return(
        <div className='res-card'>
           <img
           className='res-logo'
           alt='res-logo'
           src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/> 
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

const Body = () => {
    return(
        <div className='body'>
           <div className='search'>
              <input type='text'/>
              <button>Search</button>
           </div>
           <div className='res-container'>
            {resList.map(restaurant=>
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            )}
            {/* //or you can do
            {resList.map((restaurant)=>{
             return   <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            })}
            The curly braces create a block body. In a block body, you need to explicitly return the JSX. If you don't add a return statement, the function returns undefined by default, so nothing gets rendered for that item. */}
           </div>
          
        </div>
     
    );
}

const AppLayout = () =>{
    return(
        <div className='main-container'>
         <Header/>
         <Body/>
        </div>

    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);



//Props
// In React, props (short for "properties") are used to pass information from one component to another. The main purpose of props is to allow a parent component to send data to its child components.

// Here are some features of Props:

// Props cannot be modified by the receiving component.
//We can pass any number of props.
// They are strictly for reading data and should not be altered.
// Props can be updated when the parent component’s state changes.

//Props are just like arguments as react components are just like javascript functions



// Now let's understand this with the help of example:


// import React from 'react';

// function Greet(props) {
//     return <h1>Hello, {props.name}!</h1>;
// }

// function App() {
//     return <Greet name="Sneha" />;
// }

// export default App;
// Output




//Config driven UI
// What is Config-Driven UI?
// Config-driven UI is a design pattern where the structure and behaviour of the user interface are defined using configuration files rather than hard-coded in the application. These configuration files are typically in formats like JSON or YAML. By separating the UI logic from the code, developers can easily modify the UI without changing the underlying codebase.

// In traditional UI development, changes to the interface require modifying the code directly. However, with config-driven UI, you can update the configuration files, and the UI will automatically adjust based on the new settings. This approach not only streamlines the development process but also makes the UI more adaptable to different requirements.

// Implementing Config-Driven UI in React
// Now, let's see how to implement a config-driven UI in a React application. We'll start by setting up a basic React project, creating a configuration file, and using it to render components.

// Setting Up a Basic React Project
// First, create a new React project using Create React App:

// npx create-react-app config-driven-ui
// cd config-driven-ui
// Creating a Configuration File

// Next, create a configuration file (e.g., config.json) in the public directory:

// {
//   "form": {
//     "fields": [
//       {
//         "label": "Name",
//         "type": "text",
//         "required": true
//       },
//       {
//         "label": "Email",
//         "type": "email",
//         "required": true
//       },
//       {
//         "label": "Age",
//         "type": "number",
//         "required": false
//       }
//     ]
//   }
// }
// Using the Configuration File to Render Components

// Now, let's modify the React application to render the form based on the configuration file. First, create a component FormRenderer.js:

// import React, { useEffect, useState } from 'react';

// const FormRenderer = () => {
//   const [config, setConfig] = useState(null);

//   useEffect(() => {
//     fetch('/config.json')
//       .then(response => response.json())
//       .then(data => setConfig(data));
//   }, []);

//   if (!config) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <form>
//       {config.form.fields.map((field, index) => (
//         <div key={index}>
//           <label>{field.label}</label>
//           <input type={field.type} required={field.required} />
//         </div>
//       ))}
//     </form>
//   );
// };

// export default FormRenderer;
// Finally, use the FormRenderer component in App.js:

// import React from 'react';
// import FormRenderer from './FormRenderer';

// function App() {
//   return (
//     <div className="App">
//       <h1>Config-Driven Form</h1>
//       <FormRenderer />
//     </div>
//   );
// }

// export default App;
// This setup fetches the configuration file, reads the form settings, and dynamically renders the form based on the configuration.


//Why should we use key
// A key serves as a unique identifier in React, helping to track which items in a list have changed, been updated, or removed. It is particularly useful when dynamically creating components or when users modify the list.
// When rendering a list, you need to assign a unique key prop to each element in the list. This helps React identify which elements have changed, been added, or been removed.
//So, if we don't use key, react will not able to identify whihc element is added or removed.
//Then it will have to re-render all the elements once again.




//Why should index not be used as a key
// We all have heard that using index as key in a react list is an anti-pattern and should be avoided.

// The answer to this lies in the concepts of:

// React Virtual DOM: It's a lightweight representation of actual DOM, stored in memory and is never rendered.
// Reconciliation in React: The process of syncing Virtual DOM with the real DOM.
// Diffing Algorithm: The algorithm to find the minimum number of steps needed to update the real DOM.
// Assumptions for using the Diffing Algorithm:
// Two elements of different types will produce different trees.
// The developer can hint at which child elements may be stable across different renders with a key attribute.
// This is just a very brief overview of these concepts. For more details definitely checkout React Documentation.
// For now let's just keep in mind the 2nd assumption used for React's diffing algorithm and proceed further.

// Coming back to our topic of why a key attribute is necessary.

// React uses key attribute to track the changes in the list.

// We might face following issues when we use index value as key attribute when creating a list:

// Performance Issues due to unnecessary re-renders.
// Issues in data mapping in case list items are sorted, filtered, or deleted.
// Let's understand the performance issue with the following example.

// Suppose we've a list of elements, with key attribute as index.



// <ul>
//   <li key=1>Milk</li>
//   <li key=2>Eggs</li>
//   <li key=3>Bread</li>
// </ul>


// Now, in case of any state change in the list, React just iterates over each list item in both the lists (React compares the Virtual DOM snapshot before the update and after the update), looks for changes and finally updates the RealDOM with only those changes.

// If we add an item to the end of the list, React no longer needs to re-render the first 3 list items which are same. It will just add a new list item at the end.



// <ul>
//   <li key=1>Milk</li>
//   <li key=2>Eggs</li>
//   <li key=3>Bread</li>
//   <li key=4>Butter</li>
// </ul>


// But suppose we add the new item at the beginning of the list.



// <ul>
//   <li key="1">Butter</li>
//   <li key="2">Milk</li>
//   <li key="3">Eggs</li>
//   <li key="4">Bread</li>
// </ul>


// Now, the key of remaining list items also changes, which makes React re-render all the elements again, instead of just adding a new item at the end.


//What is <React.Fragment><React.Fragment/> and <></>?
//What is Reconciliation in react?
//What is React Fiber?
//Is ES6 mandatory for react?
//What is Virtual DOM?

/*
------------------------------------------------------------
🧠 React Reconciliation Algorithm (Diffing Algorithm)
------------------------------------------------------------
React uses the Reconciliation Algorithm to decide:
"What parts of the UI should be updated in the DOM?"

⚡ Key Points:
1. Virtual DOM Comparison
   - React creates a virtual representation of the UI.
   - When state/props change, React creates a new virtual DOM.
   - It compares the new and old virtual DOM trees.

2. Efficient Diffing
   - React assumes:
     a) Two elements of different types produce different trees.
     b) Lists need unique keys to track items correctly.

3. How React Decides Re-render:
   - If type changes (e.g., <div> → <span>), React destroys the old node.
   - If type is same, React updates only changed attributes.
   - For children, React does "keyed diffing" to reorder/match items.

4. List Keys → Very Important
   - Keys help React identify items between renders.
   - Without keys, React may re-render incorrectly or inefficiently.

🚀 Goal:
Minimize DOM operations → boost performance.
------------------------------------------------------------



------------------------------------------------------------
⚛️ React Fiber Architecture
------------------------------------------------------------
React Fiber is the internal reimplementation of React's rendering engine.

⚡ Why Fiber Exists:
Before Fiber, React updates were synchronous.
Large UI updates could freeze the browser.
Fiber made rendering:
- Interruptible
- Prioritized
- Faster

⚙️ What is a Fiber?
A Fiber = a unit of work.
React breaks the UI into fibers and processes them in small chunks.

⚡ Features Fiber Introduced:
1. **Time slicing**
   - Splits heavy rendering work into small tasks.
   - Prevents UI freezing.

2. **Priority-based updates**
   - High-priority updates (e.g., typing) happen first.
   - Low-priority updates (e.g., animations) wait.

3. **Better scheduling**
   - React can pause, resume, restart, or cancel rendering work.

4. **Concurrent Rendering**
   - Basis for features like Suspense, useTransition, etc.

🔧 How It Works Internally:
- Each component instance gets a Fiber node.
- Fiber nodes form a linked list tree.
- React walks this tree during updates (render phase).
- Then commits DOM changes (commit phase).

🚀 Result:
A smoother, more responsive UI even during heavy updates.

------------------------------------------------------------
*/


/*
------------------------------------------------------------
📌 Is ES6 Mandatory for React?
------------------------------------------------------------
❌ Not technically mandatory:
   - React can run using older ES5 JavaScript.
   - Example (old style):
     var App = React.createClass({ ... })

✅ But practically, ES6 is required today:
   - Almost all React codebases use ES6+ features.
   - Modern features make React code cleaner and shorter.

🔑 Important ES6 features used heavily in React:
   - import / export
   - let & const
   - arrow functions ( () => {} )
   - classes (class Component extends React.Component)
   - destructuring ({ name, age })
   - spread operator (...data)
   - template strings (`Hi ${name}`)
   - async/await for API calls

💡 Conclusion:
   React doesn't force ES6,
   but the entire modern ecosystem expects ES6+.
------------------------------------------------------------



------------------------------------------------------------
⚛️ What is the Virtual DOM?
------------------------------------------------------------
The Virtual DOM (VDOM) is a lightweight JavaScript object
that represents the actual DOM.

Why it exists:
   - Accessing/updating the real DOM is slow.
   - Calculations on JavaScript objects are fast.

How it works:
1. Your UI is converted into a Virtual DOM tree.
2. When state/props update:
     - React creates a NEW Virtual DOM.
3. React compares OLD vs NEW Virtual DOM (Diffing).
4. React updates ONLY the parts of the real DOM that changed.

Benefits:
   - Faster and more efficient UI updates
   - Avoids unnecessary DOM operations
   - Makes the UI smooth and responsive

Example:
   If one button text changes,
   React only updates that button, not the whole page.
------------------------------------------------------------



------------------------------------------------------------
🧠 Reconciliation (Diffing Algorithm) – Short Recap
------------------------------------------------------------
React compares the old and new Virtual DOM trees.
It finds exactly what changed and updates only those parts.

Rules:
   - If element type changes -> replace DOM node.
   - If same type -> update attributes.
   - For lists -> keys help React match items.

Goal:
   Update the DOM in the most efficient way.
------------------------------------------------------------



------------------------------------------------------------
⚛️ React Fiber – Short Recap
------------------------------------------------------------
React Fiber is the engine that makes rendering smooth.

Key Features:
   - Allows React to pause, resume, or cancel rendering work.
   - Splits work into small units (fibers).
   - Gives priority to important updates (like typing).
   - Enables modern features like Suspense & Concurrent Mode.

Result:
   Smooth UI even during heavy updates.
------------------------------------------------------------
*/
