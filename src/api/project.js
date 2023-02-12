import axiosClient from './apiClient';
import errorHandler from '../helpers/error';
import HeaderToken from './header';

/**
 * Get Product Data form database
 * @param {*} page
 * @param {*} pagesize
 * @returns
 */
const getProduct = async (page, pagesize) => {
  try {
    let quertString = '';
    quertString += `?page=${parseInt(page) - 1}&limit=${pagesize}`;
    const result = await axiosClient.get('/product' + quertString, HeaderToken);
    return result.data;
  } catch (e) {
    console.error(e);
  }
};

const addProduct = async (data) => {
  try {
    const result = await axiosClient.post('/product', data, HeaderToken);
    return result;
  } catch (error) {
    console.error(error.message);
    return errorHandler(error);
  }
};

export { getProduct, addProduct };
