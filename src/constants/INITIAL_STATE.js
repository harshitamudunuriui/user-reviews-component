/*This Constant is used set Initial State of the Application */
export const INITIAL_STATE = {
  reviews: [],
  isFetchingData: false,
  filter: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: true,
  },
  pageNumber: 1,
  order: undefined,
  group: undefined,
  hasMore: true,
};
