import { useState } from "react";
import Modal from "../../components/modal";
import ProductForm from "./product-form";
import CartList from "../cart/cart-list";

const ProductHeader = () => {
  const [modalCart, setModalCart] = useState<boolean>(false);
  const [modalProduct, setModalProduct] = useState<boolean>(false);
  return (
    <>
      <div className="product-header">
        <button onClick={() => setModalCart(true)}>سبد خرید</button>
        <p>سایت فروشگاهی</p>
        <button onClick={() => setModalProduct(true)}>ایجاد محصول</button>
      </div>

      <Modal open={modalProduct} onClose={()=> setModalProduct(false)}>
        <ProductForm />
      </Modal>

      <Modal open={modalCart} onClose={() => setModalCart(false)}>
        <CartList />
      </Modal>
    </>
  );
};
export default ProductHeader;
