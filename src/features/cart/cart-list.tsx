import { useSelector } from "react-redux";
import { cartItemsSlector } from "./cart-slectors";
import CartItem, { type ICartItem } from "./cart-item";

const CartList = ()=>{
    const cartItems = useSelector(cartItemsSlector) 
    return(
        <div className="container-cart">
            {cartItems.map((item : ICartItem )=> (
                <CartItem data={item} key={item?.productId}/>
            ))}
        </div>
    )
}
export default CartList;