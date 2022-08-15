/**
 * This reducer is used to update the filter object in the store
 *
 * @param {{}} state - the Redux state of the reducer that this function is
 *  used for
 * @param {*} payload - selected filter value
 * @returns {*} the next Redux state
 */
export const filterReducer = (state, payload) => {
  return {
    ...state,
    filter: {
      ...state.filter,
      ...payload
    },
  };
};
