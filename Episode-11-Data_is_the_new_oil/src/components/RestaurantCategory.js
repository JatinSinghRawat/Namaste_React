import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showList, setShowIndex,dummy}) => {
    const handleClick = () => {
        setShowIndex();
    }
    return <div className="w-9/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        {/* Header */}
        <div className="cursor-pointer flex justify-between" onClick={handleClick}>
            <span className="font-bold">{data.title}({data.itemCards.length})</span>
            <span>🔽</span>
        </div>
        {/* Accordian Body */}
        {showList && 
        (
        // <div>
        //     <ItemList items={data.itemCards}
        //     dummy={dummy}Props drilling/>
        // </div>
        <div>
            <ItemList items={data.itemCards}/>
        </div>
        )}
    </div>
}

export default RestaurantCategory;