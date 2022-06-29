export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_SELECTED_PRODUCT = "DELETE_SELECTED_PRODUCT";

export const addProduct = (
  id,
  name,
  quantity,
  price_after_discount,
  description
) => {
  console.log("hello there");
  return {
    type: ADD_PRODUCT,
    resultData: { id, name, quantity, price_after_discount, description },
  };
};

export const deleteSelectedProduct = (id) => {
    console.log("R2");
  return {
    type: DELETE_SELECTED_PRODUCT,
    resultData: { id},

  };
};
