import { 
  ADD_NEW_PRODUCT, 
  ADD_NEW_PRODUCT_SUCCESS, 
  ADD_NEW_PRODUCT_ERROR, 
  GET_NEW_PRODUCT, 
  GET_NEW_PRODUCT_SUCCESS, 
  GET_NEW_PRODUCT_ERROR, 
  DELETE_NEW_PRODUCT, 
  DELETE_NEW_PRODUCT_SUCCESS, 
  DELETE_NEW_PRODUCT_ERROR, 
  EDIT_PRODUCT, 
  EDIT_PRODUCT_SUCCESS, 
  EDIT_PRODUCT_ERROR 
} from "../constants/products.constant";

const initialState = {
  products: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ADD_NEW_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ADD_NEW_PRODUCT_ERROR:
      return {
        ...state,
      };
    case GET_NEW_PRODUCT:
      return {
        ...state,
      };
    case GET_NEW_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_NEW_PRODUCT_ERROR:
      return {
        ...state,
      };
    case DELETE_NEW_PRODUCT:
      return {
        ...state,
      };
    case DELETE_NEW_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
    case DELETE_NEW_PRODUCT_ERROR:
      return {
        ...state,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
