import axios from "axios";
import { ADDPRODUCTTOCART, GETPRODUCTSURL } from "../constants";
export const getProducts = async () => {
  try {
    const res = await axios.get(GETPRODUCTSURL);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getProductDetail = async (id) => {
  try {
    const res = await axios.get(`${GETPRODUCTSURL}/${id}`);
    return res.data[0];
  } catch (error) {
    console.log(error);
  }
};
export const addProductToCart = async (id, colorCode, storageCode) => {
  try {
    const res = await axios.post(ADDPRODUCTTOCART, {
      id,
      colorCode,
      storageCode,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
