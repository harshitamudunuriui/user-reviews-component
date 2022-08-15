import axios from 'axios';
import { API } from '../constants/CONSTANTS';
import { accessDenied, apiError, apiStart, apiEnd } from '../actions/apiActions/apiActions';

/**
 * This is a custom apiMiddleware which is used to handle async calls across
 * the application.
 */
const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  /* If action type is not an api then it will return */
  if (action.type !== API)
    return;

  const {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    label,
    headers
  } = action.payload;
  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

  if (label) {
    dispatch(apiStart(label));
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(({ data }) => {
      dispatch(onSuccess(data));
    })
    .catch(error => {
      dispatch(apiError(error));
      dispatch(onFailure(error));

      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname));
      }
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
