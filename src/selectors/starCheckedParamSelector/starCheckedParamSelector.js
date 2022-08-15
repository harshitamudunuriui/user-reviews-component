import { createSelector } from 'reselect';
import get from 'lodash/get';
import { filterByStarsSelector } from '../filterByStarsSelector';

/**
 * This selector is used to memorize and filter the filter Object property
 * using param
 */
export const starCheckedFactorySelector = (param, defaultValue) =>
  createSelector(
    filterByStarsSelector,
    data => get(data, param, defaultValue),
);

/**
 * This selector is used to provide filter values in the store
 */
export const starCheckedParamSelector = {
  checked1: starCheckedFactorySelector(
    '1', false,
  ),
  checked2: starCheckedFactorySelector(
    '2', false,
  ),
  checked3: starCheckedFactorySelector(
    '3', false,
  ),
  checked4: starCheckedFactorySelector(
    '4', false,
  ),
  checked5: starCheckedFactorySelector(
    '5', false,
  ),
};
