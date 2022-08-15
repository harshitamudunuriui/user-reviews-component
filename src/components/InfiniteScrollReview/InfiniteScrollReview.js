import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { GroupAndOrderBy } from '../GroupAndOrderBy';
import { FilterByContainer } from '../../containers/FilterByContainer';
import { GroupReviewDetailsContainer } from '../../containers/GroupReviewDetailsContainer';
import { ReviewDetailsContainer } from '../../containers/ReviewDetailsContainer';
import { RefreshButtonContainer } from '../../containers/RefreshButtonContainer';
import mySvg from '../../assets/sellics-logo.svg';
import './infinite-scroll-review.css';

/**
 * This component is used for Grouping, Sorting, Filtering and loading the
 * reviews by using Infinite scroll
 *
 * @param {array} reviews - reviews from the response
 * @param {boolean} hasMore - if hasMore is true will make call again on scroll
 *  else won't make the call
 * @returns {*} a React Stateless Functional Component
 */
export class InfiniteScrollReview extends React.Component {

  componentDidMount() {
    this.props.fetchReviewItems(this.props.pageNumber);
  }

  /**
   * This function is used to fetch more records from the server.
   */
  fetchMoreData = () => {
    this.props.fetchReviewItems(this.props.pageNumber + 1);
  };

  render() {
    const { reviews, hasMore, group } = this.props;
  return (
    <div className='container'>
      <div className='wrapper'>
        <GroupAndOrderBy />
        <FilterByContainer />
        <RefreshButtonContainer />
        <InfiniteScroll
          dataLength={reviews.length}
          next={this.fetchMoreData}
          hasMore={hasMore}
          loader={<h4 className='text-center'>Loading...</h4>}
          endMessage={<h4 className='text-center'>No More Results</h4>}
          className='infinite-scroll'
        >
          {
            isEmpty(group) ?
              <ReviewDetailsContainer /> :
              <GroupReviewDetailsContainer />
          }

        </InfiniteScroll>
      </div>
  </div>
  )}
}

InfiniteScrollReview.propTypes = {
  reviews: PropTypes.array,
  group: PropTypes.string,
};

InfiniteScrollReview.defaultProps = {
  reviews: [],
  group: '',
};
