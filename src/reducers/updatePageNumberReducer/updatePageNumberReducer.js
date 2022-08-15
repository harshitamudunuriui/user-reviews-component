/**
 * This reducer is used to update the page Number in the store
 *
 * @param {{}} state - the Redux state of the reducer that this function is
 *  used for
 * @param {*} payload - page number
 * @returns {*} the next Redux state
 */
export const updatePageNumberReducer = (state, payload) => {
  return {
    ...state,
    pageNumber: payload
  }
};
