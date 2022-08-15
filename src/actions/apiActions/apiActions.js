import { API_START, API_END, ACCESS_DENIED, API_ERROR } from '../../constants/CONSTANTS';

/**
 * This action is used to start the loader when api call initiated
 *
 * @param {string} label - type of an action
 * @returns {{payload: string, type: string}}
 */
export const apiStart = label => ({
  type: API_START,
  payload: label
});

/**
 * This action is used to stop the loader when api call ended
 *
 * @param {string} label - type of an action
 * @returns {{payload: string, type: string}}
 */
export const apiEnd = label => ({
  type: API_END,
  payload: label
});

/**
 * This action will trigger if api call failed and status code is 403
 *
 * @param {string} url - url of the api
 * @returns {{payload: string, type: string}}
 */
export const accessDenied = url => ({
  type: ACCESS_DENIED,
  payload: {url}
});

/**
 * This action is used to catch the api action and returns the failed error
 *
 * @param {string} error - error from the api
 * @returns {{payload: string, type: string}}
 */
export const apiError = error => ({
  type: API_ERROR,
  error
});
