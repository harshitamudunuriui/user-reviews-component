import moment from 'moment';
import { GROUP_TYPES } from '../../constants/GROUP_TYPES';

/**
 * This helper is used to display grouped headings by Day, Week or Month
 *  Example (Day -  “05.02”) (Week - “05.02 - 11.02”) (month - “January”)
 *
 * @param {string} group - selected grouped by value
 * @param {string} time - timestamp values in day or month or week
 * @param {Number} index - index of the group
 * @returns -  returns the heading for Day, Week and Month
 */
export const getCardHeadingHelper = (group, time, index) => {
  const timeStamp = Number(time[index]);

  if(group === GROUP_TYPES.DAY) {
    return moment(
      timeStamp
    ).format("DD.MM");
  }

  if (group === GROUP_TYPES.WEEK) {
   return `${moment(timeStamp).format("DD.MM")} - ${moment(timeStamp).add(7, 'days').format("DD.MM")}`;
  }

  if(group === GROUP_TYPES.MONTH) {
   return moment.months(
     Number(
       moment(
         timeStamp
       ).format("MM")
     )- 1
   );
  }

  return '';
};
