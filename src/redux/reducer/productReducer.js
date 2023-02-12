import { GET_PRODUCT_DETAILS, POST_PRODUCT_DETAILS } from '../actions/type';

const initialState = {
  product: []
};

const productReducer = (state = initialState, action) => {
  console.log(action.payload, 'check payload');

  switch (action.type) {
    case GET_PRODUCT_DETAILS:
      return { product: action.payload };
    case POST_PRODUCT_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;
