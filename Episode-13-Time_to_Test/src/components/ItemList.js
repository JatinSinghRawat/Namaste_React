import { CDN_URL } from "../utils/constants";
import {useDispatch} from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice"
const ItemList = ({ items, dummy, showRemove}) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  }

  const handleRemoveItem = (item)=>{
    dispatch(removeItem());
  }
    // console.log(dummy,"dummydata") Props drilling
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} data-testid="foodItems" className="border-b">
          <div className="text-left my-4 flex">
            <div className="w-9/12">
              <div className="font-bold">
                <span>{item?.card?.info?.name}</span>-
                <span>
                  ₹
                  {item?.card?.info?.defaultPrice
                    ? item?.card?.info?.defaultPrice / 100
                    : item?.card?.info?.price / 100}
                </span>
              </div>
              <div>{item?.card?.info?.description}</div>
            </div>
            <div className="w-3/12 flex justify-center relative">
              {item.card.info.imageId && (
                <div className="w-36 h-28 relative" >
                  <img className="w-full h-full object-cover rounded-lg" src={CDN_URL + item.card.info.imageId} />
                </div>
              )}
              {
                showRemove?(<button
              onClick={()=>handleRemoveItem(item)}
                className="
                    cursor-pointer
                    my-2
                    absolute
                    border-2
                    border-red-500
                    bottom-2
                    left-1/2
                    -translate-x-1/2
                    bg-white
                    text-red-500
                    font-bold
                    px-1
                    py-1
                    rounded-lg
                    shadow-lg"
              >
                Remove -
              </button>):(
                <button
              onClick={()=>handleAddItem(item)}
                className="
                    cursor-pointer
                    my-2
                    absolute
                    border-2
                    border-green-600
                    bottom-2
                    left-1/2
                    -translate-x-1/2
                    bg-white
                    text-green-600
                    font-bold
                    px-1
                    py-1
                    rounded-lg
                    shadow-lg"
              >
                Add +
              </button>
              )
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
