import { useSelector } from "react-redux";
import { cartItemsSlector, totalQuantity } from "./cart-slectors";
import CartItem, { type ICartItem } from "./cart-item";

const CartList = () => {
  const cartItems = useSelector(cartItemsSlector);
  const quantityTotal = useSelector(totalQuantity);

  const totalPrice = cartItems.reduce(
    (total, item) => item.quantity * (item.price ?? 0) + total,
    0,
  );

  return (
    <div className="container-cart">
      {cartItems.map((item: ICartItem) => (
        <CartItem data={item} key={item?.productId} />
      ))}

      <div className="cart-info">
        <p>مجموع قیمت سبد خرید :{totalPrice}</p>
        <p>تعداد کل آیتم های سبد خرید : {quantityTotal}</p>
      </div>
    </div>
  );
};
export default CartList;
