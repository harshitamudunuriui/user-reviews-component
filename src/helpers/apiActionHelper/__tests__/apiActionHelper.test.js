import { apiActionHelper } from '../apiActionHelper';

describe('apiActionHelper', () => {
  it('should return new Object based on values', () => {
    const mockObject = {
      onFailure: null,
      onSuccess: null,
    };
    const expected = apiActionHelper(mockObject);
    const result = {
      payload:  {
        accessToken: null,
        data: null,
        headersOverride: null,
        label: "",
        method: "GET",
        onFailure: null,
        onSuccess: null,
        url: ""
      },
      type: "API"
    };
    expect(expected).toEqual(result);
  });
});
