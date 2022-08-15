import {
  UPDATE_REVIEWS,
  FILTER_REVIEWS,
  ORDER_REVIEWS,
  GROUP_REVIEWS,
  GET_REVIEWS,
  RESET_REVIEWS,
  UPDATE_PAGE_NUMBER
} from '../../constants/CONSTANTS';
import { CONFIG } from '../../constants/CONFIG';
import { apiActionHelper } from '../../helpers/apiActionHelper';

/**
 * This action is used to update the reviews data in the store
 *
 * @param {array} payload - reviews coming from the api response
 * @returns {{reviews: array, type: UPDATE_REVIEWS}}
 */
export const updateReviews = payload => ({
  type: UPDATE_REVIEWS,
  payload,
});

/**
 * This action is used to update the filter Object in the store
 *
 * @param {Object} payload - selected filter Object
 * @returns {{filter: Object, type: string}}
 */
export const filterReviews = payload => ({
  type: FILTER_REVIEWS,
  payload,
});

/**
 * This action is used to update the order value in the store
 *
 * @param {string} payload - selected orderBy value
 * @returns {{type: string, order: string}}
 */
export const orderReviews = payload => ({
  type: ORDER_REVIEWS,
  payload,
});

/**
 * This action is used to update the group value in the store
 *
 * @param {string} payload - selected groupBy value
 * @returns {{type: string, group: string}}
 */
export const groupReviews = payload => ({
  type: GROUP_REVIEWS,
  payload,
});

/**
 * This action is used to update the the page number in the store
 *
 * @param {string} payload - selected groupBy value
 * @returns {{type: string, group: string}}
 */
export const updatePageNumber = payload => ({
  type: UPDATE_PAGE_NUMBER,
  payload,
});

/**
 * This action is used to clear the reviews from the store
 *
 * @returns {{type: string, group: string}}
 */
export const resetReviews = () => ({
  type: RESET_REVIEWS,
});

/**
 * This action is used to fetch Reviews by using api call
 *
 * @param {number} pageNumber - pageNumber value
 * @returns {{payload: number, type: string}}
 */
export const fetchReviews = (pageNumber) => (
  apiActionHelper({
    url: `${CONFIG.URL}${pageNumber}`,
    onSuccess: updateReviews,
    onFailure: console.log('Error occured loading items'),
    label: GET_REVIEWS,
  })
);
