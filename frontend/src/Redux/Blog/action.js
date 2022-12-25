import * as types from "./actionTypes";
import axios from "axios";
const token = localStorage.getItem("token");
export const postBlog = (payload) => (dispatch) => {
  dispatch({ type: types.POST_BLOG_REQUEST });

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
      return dispatch({ type: types.POST_BLOG_FAILURE, payload: err });
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

export const deleteBlog = (payload) => (dispatch) => {
  return axios
    .delete(`http://localhost:8080/deleteblog/${payload}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res.data);
      return dispatch({ type: types.DELETE_BLOG_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editBlog =
  ({ id, data }) =>
  (dispatch) => {
    return axios
      .patch(`http://localhost:8080/editblog/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((res) => {
        console.log(res.data);
        return dispatch({ type: types.EDIT_BLOG_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
