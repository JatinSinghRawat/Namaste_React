import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    const cartItems = useSelector((store)=>store.cart.items);
    return(
        <div>
        <div className="p-5 m-auto text-center font-bold">
            Cart
        </div>
        {
            cartItems.length>0? (
        <div>
        <div className="p-10 border shadow-lg border-gray-200 mt-10 mb-2 mx-4">
        <ItemList items={cartItems} showRemove={true}/>
        </div>
        <div className="text-center p-2">
            <button className="bg-gray-200 p-2 rounded-lg cursor-pointer hover:bg-gray-300"
            onClick={handleClearCart}>
                Clear Cart
            </button>
        </div>
        </div>
        
            ):(
                <div className="p-5 m-auto text-center font-bold">
                    Add some items in the cart
                </div>
            )
        }
        </div>
    );
}

export default Cart;