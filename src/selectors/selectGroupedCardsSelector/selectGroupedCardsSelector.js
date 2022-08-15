import { createSelector } from 'reselect';
import { groupBySelector } from '../groupBySelector';
import { orderBySelector } from '../orderBySelector';
import { getGroupByTimeSelector } from '../getGroupByTimeSelector';
import { SORTING } from '../../constants/SORTING';

/**
 * This selector is used to provide grouped reviews by most recent and most
 * oldest review created format
 */
export const selectGroupedCardsSelector = createSelector(
  [
    groupBySelector,
    getGroupByTimeSelector,
    orderBySelector,
  ],
  (
    group,
    groupedReviews,
    order,
  )=> {
    return Object.entries(groupedReviews).sort((groupedReviewsA, groupedReviewsB) => {
        if (order === SORTING.MOST_OLDEST) {
          return groupedReviewsA[0] - groupedReviewsB[0];
        }

        return groupedReviewsB[0] - groupedReviewsA[0];
      })
      .map(([key, value]) => value.sort((valueA, valueB) => {
        if (order === SORTING.MOST_OLDEST) {
          return valueA.reviewCreated - valueB.reviewCreated;
        }

        return valueB.reviewCreated - valueA.reviewCreated;
      }));
  },
);
