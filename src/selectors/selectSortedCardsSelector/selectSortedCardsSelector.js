import { createSelector } from 'reselect';
import sortBy from 'lodash/sortBy';
import { getFilteredDataByStarsSelector } from '../getFilteredDataByStarsSelector';
import { orderBySelector } from '../orderBySelector';
import { SORTING } from '../../constants/SORTING';

/**
 * This selector is used to memorize and sort the reviews by most recent and oldest
 */
export const selectSortedCardsSelector = createSelector(
  [
    getFilteredDataByStarsSelector,
    orderBySelector,
  ],
  (
    filteredData,
    order,
    ) => order === SORTING.MOST_OLDEST ?
    sortBy(filteredData, 'reviewCreated') :
    sortBy(filteredData, 'reviewCreated').reverse()
);
