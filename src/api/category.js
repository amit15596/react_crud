import axiosClient from './apiClient';
import errorHandler from '../helpers/error';
import HeaderToken from './header';
/**
 * Get Category API
 * @returns data object
 */
const getCategory = async (page, pagesize) => {
  try {
    let quertString = '';
    quertString += `?page=${parseInt(page) - 1}&limit=${pagesize}`;
    const result = await axiosClient.get('/category' + quertString, HeaderToken);
    return result.data;
  } catch (error) {
    console.error(error.message);
  }
};

/**
 * Add Category API
 * @param {*} data
 * @returns data
 */
const addCategory = async (data) => {
  try {
    const result = await axiosClient.post('/category',HeaderToken, data);
    return result;
  } catch (error) {
    console.error(error.message);
    return errorHandler(error);
  }
};

/**
 * Update Category API
 * @param {*} data
 * @param {*} id
 */
const updateCategory = async (data, id) => {
  try {
    const result = await axiosClient.put(`/category/${id}`,HeaderToken, data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Delete category api
 * @param {*} id
 * @returns
 */

const deleteCategory = async (id) => {
  try {
    const result = await axiosClient.delete(`/category/${id}`, HeaderToken);
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export { getCategory, addCategory, updateCategory, deleteCategory };
