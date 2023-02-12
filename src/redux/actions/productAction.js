import { GET_PRODUCT_DETAILS, POST_PRODUCT_DETAILS } from './type';

import { getProduct, addProduct } from '../../api/project';

const GetProductAction = (page, pagesize) => async (dispatch) => {
  try {
    const result = await getProduct(page, pagesize);
    dispatch({
      type: 'GET_PRODUCT_DETAILS',
      payload: result
    });
  } catch (error) {
    console.error(error);
  }
};

const postProductAction = (data) => async (dispatch) => {
  try {
    const result = await addProduct(data);
    dispatch({
      type: 'POST_PRODUCT_DETAILS',
      payload: result.data
    });
    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export { GetProductAction, postProductAction };
