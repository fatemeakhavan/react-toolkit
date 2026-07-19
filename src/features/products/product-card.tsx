import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../cart/cart-slice";
import imageProduct from "../../assets/small_product-TLP-69610_dcb93d6f-a847-4fed-8ab4-d05756d05a8e.webp";

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
      <img className="imag-card" src={imageProduct}></img>

      <div className="card-info">
        <p> نام محصول : {data.name} </p>
        <p>قیمت: {data.price} </p>
      </div>

      <p className="card-description">{data.description}</p>

      <button
        className="btn-add-to-cart"
        onClick={() => dispatch(addToCart(data.id))}
      >
        اضافه شدن به سبد خرید
      </button>
    </div>
  );
};
export default ProductCard;
