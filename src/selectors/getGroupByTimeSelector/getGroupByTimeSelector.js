import { createSelector } from 'reselect';
import { groupBySelector } from '../groupBySelector';
import { getFilteredDataByStarsSelector } from '../getFilteredDataByStarsSelector';
import { getGroupByTimeHelper } from '../../helpers/getGroupByTimeHelper';

/**
 * This selector is used to return and memorize grouped review items based on
 * selected value in the Group By Dropdown.
 */
export const getGroupByTimeSelector = createSelector(
  [
    groupBySelector,
    getFilteredDataByStarsSelector,
  ],
  (
    group,
    filteredReviews,
  ) => getGroupByTimeHelper(filteredReviews, group)
);
