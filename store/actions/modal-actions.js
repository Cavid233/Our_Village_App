export const UPDATE_MODAL = "UPDATE_MODAL";
export const UPDATE_SELECTED_PRODUCT_ID = "UPDATE_SELECTED_PRODUCT_ID";
// export const SET_RESULT = "SET_RESULT";

export const modalShowHandler = (checkStatus) => {
  return {
    type: UPDATE_MODAL,
    resultData: { checkStatus },
  };
};

export const updateSelectedProductIdHandler = (productId) => {
  return {
    type: UPDATE_SELECTED_PRODUCT_ID,
    resultData: { productId },
  };
};
