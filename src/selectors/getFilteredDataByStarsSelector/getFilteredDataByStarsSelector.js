import { createSelector } from 'reselect';
import pickBy from 'lodash/pickBy';
import filter from 'lodash/filter';
import { filterByStarsSelector } from '../filterByStarsSelector';
import { getReviewsSelector } from '../getReviewsSelector';

/**
 * This selector is used to filters the reviews by using filtered values in the
 * store. If there is no filter selected then we should return all the reviews.
 */
export const getFilteredDataByStarsSelector = createSelector(
  [
    filterByStarsSelector,
    getReviewsSelector,
  ],
  (
    filterByStars,
    reviews,
  ) => {
    const trueValues = Object.keys(
      pickBy(filterByStars, value => value)
    );
    const noFilter = Object.values(filterByStars).every(item => !item);

    if (noFilter) {
      return reviews;
    }

    return filter(reviews,
      item => trueValues.includes(item.stars.toString())
    );
  },
);
