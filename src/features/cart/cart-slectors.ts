import type { RootState } from "../../store/store";

export const cartItemsSlector = (state: RootState) => {
  return state.cart.map((cartItem) => {
    const product = state.product.find(
      (productItem) => productItem.id === cartItem.productId,
    );

    return {
      productId: cartItem.productId,
      quantity: cartItem?.quantity,
      name: product?.name,
      price: product?.price,
      imag: product?.imag,
    };
  });
};
