import { useAppSelector } from "../../store/hooks";
import ProductCard from "./product-card";

const ProductList = () => {
  const products = useAppSelector((state) => state.product);
  console.log("products", products);
  return (
    <div className="container-product">
      <p>لیست محصولات</p>
      <div className="container-product-list">
        {products.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
