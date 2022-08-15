import { apiStart, apiEnd, apiError, accessDenied} from '../apiActions';

describe('api actions', () => {
  it('apiStart should create API_START action', () => {
    expect(apiStart('api start')).toEqual({
      type: 'API_START',
      payload: 'api start'
    })
  });

  it('apiEnd should create API_END action', () => {
    expect(apiEnd('api end')).toEqual({
      type: 'API_END',
      payload: 'api end'
    })
  });

  it('accessDenied should create ACCESS_DENIED action', () => {
    expect(accessDenied('access Denied')).toEqual({
      type: 'ACCESS_DENIED',
      payload: {'url': 'access Denied'}
    })
  });

  it('apiError should create API_ERROR action', () => {
    expect(apiError('api Error')).toEqual({
      type: 'API_ERROR',
      error: 'api Error'
    })
  })
});
