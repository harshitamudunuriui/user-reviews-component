/**
 * This reducer is used to update the group value in the store
 *
 * @param {{}} state - the Redux state of the reducer that this function is
 *  used for
 * @param {*} payload - selected GroupBy value
 * @returns {*} the next Redux state
 */
export const groupReducer = (state, payload) => {
  return {
    ...state,
    group: payload
  };
};
