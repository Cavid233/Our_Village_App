import { ADD_PRODUCT, DELETE_SELECTED_PRODUCT } from "../actions/cart";

const initialState = {
  basket: [
    {
      id: "p1",
      name: "Gilas",
      quantity: 10,
      price_after_discount: "5.00",
      description: "Əsl kənd meyvəsin. Organik ve saf.",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = action.resultData;
      const isProductExist = state.basket.find((e) => e.id == newProduct.id);

      //   console.log(newProduct);
      if (isProductExist) {
        const findIndex = state.basket.findIndex((e) => e.id == newProduct.id);

        const newBasket = state.basket;

        const getQuantity = action.resultData.quantity;

        const selectedProduct = newBasket[findIndex];

        newBasket[findIndex] = {
          ...selectedProduct,
          quantity: getQuantity + selectedProduct.quantity,
        };

        return {
          basket: [...newBasket],
        };
      } else {
        return {
          basket: [...state.basket, newProduct],
        };
      }

    case DELETE_SELECTED_PRODUCT:
      const newBasket = state.basket.filter(
        (e) => e.id !== action.resultData.id
      );

      return {
        basket: [...newBasket],
      };
    default:
      return state;
  }
};
