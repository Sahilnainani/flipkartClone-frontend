import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

const URL = "http://localhost:8000";

export const addtoCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);
    console.log(`action cart`)
    dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    console.log("Error while calling Cart api");
  }
};

export const removefromcart = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};
