import * as types from "./actionTypes";

const initialState = {
  blog: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BLOG_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GET_BLOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        blog: payload,
      };

    case types.GET_BLOG_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        blog: [],
      };

    case types.POST_BLOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};
