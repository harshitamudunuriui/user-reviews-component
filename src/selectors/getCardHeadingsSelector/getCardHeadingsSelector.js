import { createSelector } from 'reselect';
import { groupBySelector } from '../groupBySelector';
import { orderBySelector } from '../orderBySelector';
import { getFilteredDataByStarsSelector } from '../getFilteredDataByStarsSelector';
import { getGroupByTimeHelper } from '../../helpers/getGroupByTimeHelper';
import { SORTING } from '../../constants/SORTING';

/**
 * This selector is used to get and memorize the review card heading based on type of the
 * grouping, type of the sorting
 */
export const getCardHeadingsSelector = createSelector(
  [
    groupBySelector,
    getFilteredDataByStarsSelector,
    orderBySelector
  ],
  (
    group,
    filteredData,
    order,
  ) => {
    const data = Object.keys(getGroupByTimeHelper(filteredData, group));

    return order === SORTING.MOST_OLDEST ?
      data.reverse() :
      data;
  }
);
