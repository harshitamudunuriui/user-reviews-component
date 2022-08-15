import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

/**
 * This helper is used to return title value from the review item details
 * and then update the title value as substring from 0 to 15 characters and
 * append ... at the end.
 *
 * @param {Object} item - review item coming from the response
 * @returns {string} - updated string value.
 */
export const getProductTitleHelper = (item) => {
  const title = get(item, 'productTitle', '');
  if (isEmpty(title)) {
    return '';
  }

  return title.slice(0, 15) + '...'
};
