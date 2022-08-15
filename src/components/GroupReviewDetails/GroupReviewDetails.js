import * as React from 'react';
import PropTypes from 'prop-types';
import { ReviewDetails } from '../ReviewDetails';
import { getCardHeadingHelper } from '../../helpers/getCardHeadingHelper';
import { GroupReviewDetailsStyles } from './GroupReviewDetailsStyles';

/**
 * This component is used to display the review component with heading
 *
 * @param {array} groupedCards - list of grouped items grouped day, week or
 *  month
 * @param {array} cardHeadings - list of grouped headings grouped day, week or
 *  month
 * @param {array} group - type of the grouping
 * @returns {*} a React Stateless Functional Component
 */
export const GroupReviewDetails = ({ groupedCards, cardHeadings, group }) => {
  const classes = GroupReviewDetailsStyles();
  return (
    <React.Fragment>
      {
        groupedCards.map((cards, index) => {
          const heading = getCardHeadingHelper(group, cardHeadings, index);
          return (
            <React.Fragment key={heading}>
              <p className={classes.margin}>{heading}</p>
              <ReviewDetails
                cards={cards}
              />
            </React.Fragment>
          );
        })
      }
    </React.Fragment>
  );
}

GroupReviewDetails.propTypes = {
  groupedCards: PropTypes.array,
  cardHeadings: PropTypes.array,
  group: PropTypes.string,
};

GroupReviewDetails.defaultProps = {
  groupedCards: [],
  cardHeadings: [],
  group: undefined,
};


