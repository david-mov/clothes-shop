import { CLEAN_UPDATE_PRODUCT_DETAILS, GET_ALL_SIZES, GET_UPDATE_SIZE_DETAILS } from "../../consts/actionConsts";

const initialState = {
  sizes: [],
  updateSizeDetails: {}
};

export default function sizesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SIZES:
      return {
        ...state,
        sizes: action.payload,
      }
      case GET_UPDATE_SIZE_DETAILS:
        return {
          ...state,
          updateSizeDetails: action.payload
        }
      case CLEAN_UPDATE_PRODUCT_DETAILS:
        return {
          ...state,
          updateSizeDetails: {}
        }
    default:
      return { ...state };
  }
}
