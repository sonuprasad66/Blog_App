import * as types from "./actionTypes";
import axios from "axios";

export const postBlog = (payload) => (dispatch) => {
  const token = localStorage.getItem("token");
  return axios
    .post(`http://localhost:8080/postblog`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res.data);
      return dispatch({ type: types.POST_BLOG_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getBlog = (payload) => (dispatch) => {
  dispatch({ type: types.GET_BLOG_REQUEST });
  return axios
    .get(`http://localhost:8080/getblog`)

    .then((res) => {
      console.log(res.data);
      return dispatch({ type: types.GET_BLOG_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.GET_BLOG_FAILURE, payload: err });
    });
};
