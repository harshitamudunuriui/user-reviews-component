import * as React from 'react';
import { GroupByContainer } from '../../containers/GroupByContainer';
import { OrderByContainer } from '../../containers/OrderByContainer';

/**
 * This component is used to display groupBy and sortBy components
 *
 * @returns {*} a React Stateless Functional Component
 */
export const GroupAndOrderBy = () => {
  return (
   <React.Fragment>
      <GroupByContainer />
      <OrderByContainer />
   </React.Fragment>
)};
