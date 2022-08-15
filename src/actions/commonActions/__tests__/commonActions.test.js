import {
  updateReviews,
  groupReviews,
  orderReviews,
  filterReviews,
  fetchReviews
} from '../commonActions';

const defaultPayloadForApi = {
  url: 'https://cors-anywhere.herokuapp.com/https://sellics-frontend-test.herokuapp.com/reviews/1',
  method: 'GET',
  data: null,
  accessToken: null,
  onSuccess:  () => {},
  onFailure: () => {},
  label: 'GET_REVIEWS',
  headersOverride: null
};

describe('Infinite Scroll Review Details Actions', () => {
  it('updateReviews should create UPDATE_REVIEWS action', () => {
    expect(updateReviews()).toEqual({
      type: 'UPDATE_REVIEWS'
    })
  });

  it('filterReviews should create FILTER_REVIEWS action', () => {
    expect(filterReviews()).toEqual({
      type: 'FILTER_REVIEWS'
    })
  });

  it('orderReviews should create ORDER_REVIEWS action', () => {
    expect(orderReviews()).toEqual({
      type: 'ORDER_REVIEWS',
    })
  });

  it('groupReviews should create GROUP_REVIEWS action', () => {
    expect(groupReviews()).toEqual({
      type: 'GROUP_REVIEWS',
    })
  });

  it('fetchReviews should create API action', () => {
    expect(JSON.stringify(fetchReviews(1))).toEqual(JSON.stringify({
      type: 'API',
      payload: defaultPayloadForApi
    }))
  })
});
