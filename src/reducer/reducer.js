import { Actions } from "./actions";

const defaultState = {
  isFetching: false,
  isFetched: false,
  error: null
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Actions.FETCH_DATA_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };

    case Actions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload.data,
        isFetching: false,
        isFetched: true
      };

    case Actions.FETCH_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        error: action.payload.error
      };

    case Actions.FETCH_PRODUCT_REQUEST:
      return state;

    case Actions.FETCH_PRODUCT_SUCCESS:
      return {
          ...state,
          product_list: action.payload.data
      };

    case Actions.FETCH_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default mainReducer;
