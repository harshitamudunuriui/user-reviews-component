import { API } from '../../constants/CONSTANTS';

/**
 * This helper is used to dispatch an api action
 */
export const apiActionHelper = ({
  url = '',
  method = 'GET',
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = '',
  headersOverride = null
}) => ({
  type: API,
  payload: {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headersOverride
  }
});
