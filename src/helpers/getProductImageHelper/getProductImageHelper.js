import get from 'lodash/get';

/**
 * This helper is used to get the image src by using productImg value from the
 * response
 *
 * @param {string} item - review item from the response.
 * @returns {string} - image url
 */
export const getProductImageHelper = (item) => {
  const productImg = get(item, 'productImg', '');
  return `https://images-na.ssl-images-amazon.com/images/I/${productImg}._CR412,0,1060,1060_UX100.jpg`;
};
