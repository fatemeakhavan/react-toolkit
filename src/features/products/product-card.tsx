import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../cart/cart-slice";

interface IProductItem {
  id: number;
  name: string;
  price: number;
  imag: string;
  description: string;
}

const ProductCard = ({ data }: { data: IProductItem }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="container-card">
      <img className="imag-card" src={data.imag}></img>

      <div className="card-info">
        <p>{data.name} نام محصول </p>
        <p>{data.price} قیمت</p>
      </div>

      <p className="card-description">{data.description}</p>

      <button onClick={() => dispatch(addToCart(data.id))}>
        اضافه شدن به سبد خرید
      </button>
    </div>
  );
};
export default ProductCard;
