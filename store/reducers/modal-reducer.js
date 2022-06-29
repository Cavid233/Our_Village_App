import { UPDATE_MODAL, UPDATE_SELECTED_PRODUCT_ID } from "../actions/modal-actions";

const intialState = {
  isSettingsModalShow: false,
  selectedProductİd: null,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_MODAL:
      let check = action.resultData.checkStatus;

      return {
        ...state,
        isSettingsModalShow: check,
      };
    case UPDATE_SELECTED_PRODUCT_ID:


      const newSelectedProductId = action.resultData.productId;

      return {
        ...state,
        selectedProductİd: newSelectedProductId,
      };
    default:
      return state;
  }
};
