import { useAppDispatch } from "../../store/hooks";
import { decreaseItemCount, increaseItemCount } from "./cart-slice";

export interface ICartItem {
  productId: number;
  quantity: number;
  name: string | undefined;
  price: number | undefined;
  imag: string | undefined;
}

const CartItem = ({ data }: { data: ICartItem }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="container-card">
      <img className="imag-card" src={data?.imag}></img>

      <div className="card-info">
        <p>{data?.name} نام محصول :</p>
        <p>{data?.price} قیمت:</p>
      </div>

      <div className="action-card-container">
        <button
          className="btn-card"
          onClick={() => dispatch(increaseItemCount(data?.productId))}
        >
          +
        </button>
        <p className="quantity">{data.quantity}</p>
        <button
          className="btn-card"
          onClick={() => dispatch(decreaseItemCount(data?.productId))}
        >
          -
        </button>
      </div>
    </div>
  );
};
export default CartItem;
