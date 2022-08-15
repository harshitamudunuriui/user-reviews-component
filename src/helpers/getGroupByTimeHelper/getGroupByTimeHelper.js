import groupByTime from 'group-by-time';

/**
 * This helper is used to group the reviews based on reviewCreated value from
 * the response and it will return the grouped items in Day, Week and Month
 * Format based on selection of groupBy item
 *
 * @param {array} filteredReviews - filtered reviews from the api response
 * @param {string} group - selected group by value
 * @returns {Object} - Grouped reviews
 */
export const getGroupByTimeHelper = (filteredReviews, group) =>
  groupByTime(filteredReviews, 'reviewCreated', group);
