/**
 * This reducer is used to update order value in the store
 *
 * @param {{}} state - the Redux state of the reducer that this function is
 *  used for
 * @param {*} payload - selected orderBy value
 * @returns {*} the next Redux state
 */
export const orderReducer = (state, payload) => {
  return {
    ...state,
    order: payload
  };
};
