import { GET_REVIEWS } from '../../constants/CONSTANTS';

/**
 * This reducer will trigger if api action is ended and is used to hide the
 * loader
 *
 * @param {{}} state - the Redux state of the reducer that this function is
 *  used for
 * @param {*} payload - getReviews action
 * @returns {*} the next Redux state
 */
export const apiEndReducer = (state, payload) => {
  if (payload === GET_REVIEWS) {
    return {
      ...state,
      isFetchingData: true
    };
  }

  return state;
};
