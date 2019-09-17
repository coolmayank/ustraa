import each from "lodash/each";

const createActionTypes = (prefix, actionTypeList) => {
  const actionTypesObject = {};

  each(actionTypeList, item => {
      actionTypesObject[item] = `${prefix}/${item}`;
  });

  return actionTypesObject;
};

export const Actions = createActionTypes("drugActions", [
  "FETCH_DATA_REQUEST",
  "FETCH_DATA_SUCCESS",
  "FETCH_DATA_ERROR",
  "FETCH_PRODUCT_REQUEST",
  "FETCH_PRODUCT_SUCCESS",
  "FETCH_PRODUCT_ERROR"
]);


export const fetchDataRequest = () => {
  return {
      type: Actions.FETCH_DATA_REQUEST
  };
};

export const fetchDataSuccess = data => {
  return {
      type: Actions.FETCH_DATA_SUCCESS,
      payload: {
          data
      }
  };
};

export const fetchDataFailure = error => {
  return {
      type: Actions.FETCH_DATA_ERROR,
      payload: {
          error
      }
  };
};

export const fetchProductRequest = () => {
  return {
      type: Actions.FETCH_PRODUCT_REQUEST
  };
};

export const fetchProductSuccess = data => {
  return {
      type: Actions.FETCH_PRODUCT_SUCCESS,
      payload: {
          data
      }
  };
};

export const fetchProductFailure = error => {
  return {
      type: Actions.FETCH_PRODUCT_ERROR,
      payload: {
          error
      }
  };
};

export const fetchData = () => {
  return (dispatch, getState, { api }) => {
      dispatch(fetchDataRequest());
      let request = null;
      request = api.get("https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob");

      return request
          .then(data => {
            let resp = data.data;
            dispatch(fetchDataSuccess(resp));
            return Promise.resolve(resp);
          })
          .catch(error => {
            dispatch(fetchDataFailure(error));
            return Promise.reject(error);
          });
  };
};

export const fetchProducts = (category_id) => {
  return (dispatch, getState, { api }) => {
      dispatch(fetchProductRequest());
      let request = null;
      request = api.get(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${category_id}`);

      return request
          .then(data => {
            let resp = data.data;
            dispatch(fetchProductSuccess(resp));
            return Promise.resolve(resp);
          })
          .catch(error => {
            dispatch(fetchProductFailure(error));
            return Promise.reject(error);
          });
  };
};
