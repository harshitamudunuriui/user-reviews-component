/**
 * This reducer is used to update the reviews and hasMore value in the store
 *
 * @param {{}} state - the Redux state of the reducer that this function is
 *  used for
 * @param {Object} payload - api response from the service
 * @returns {*} the next Redux state
 */
export const updateReviewReducer = (state, payload) => {
return {
  ...state,
  reviews: state.reviews.concat(payload.reviews),
  hasMore: payload.hasMore,
}
};
