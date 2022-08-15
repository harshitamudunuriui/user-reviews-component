/**
 * This reducer is used to clear the reviews in the store
 *
 * @param {{}} state - the Redux state of the reducer that this function is
 *  used for
 *
 * @returns {*} the next Redux state
 */
export const resetReviewsReducer = (state) => {
  return {
    ...state,
    reviews: [],
    hasMore: true,
    pageNumber: 1,
  }
};
