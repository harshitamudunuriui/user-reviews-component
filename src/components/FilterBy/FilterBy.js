import * as React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import PropTypes from 'prop-types';
import { OrderBy } from '../OrderBy';
import { CheckBoxGroup } from '../CheckBoxGroup';

/**
 * This component is used to filter the reviews based on the stars value
 *
 * @param {string} handleCheckBoxChange - is used to update the star values in
 *  store
 * @param {string} handleCheckBoxChange - is used to update the star values
 * @param {boolean} checked1 - checked1 value is used to filter 1star reviews
 * @param {boolean} checked2 - checked2 value is used to filter 2star reviews
 * @param {boolean} checked3 - checked3 value is used to filter 3star reviews
 * @param {boolean} checked4 - checked4 value is used to filter 4star reviews
 * @param {boolean} checked5 - checked5 value is used to filter 5star reviews
 * @returns {*} a React Stateless Functional Component
 */
export const FilterBy = ({
  handleCheckBoxChange,
  checked1,
  checked2,
  checked3,
  checked4,
  checked5,
}) => {
    return (
      <FormGroup row>
        <CheckBoxGroup
          checked={checked1}
          handleCheckBoxChange={handleCheckBoxChange('1')}
          value='checked1'
          label='1'
        />
        <CheckBoxGroup
          checked={checked2}
          handleCheckBoxChange={handleCheckBoxChange('2')}
          value='checked2'
          label='2'
        />
        <CheckBoxGroup
          checked={checked3}
          handleCheckBoxChange={handleCheckBoxChange('3')}
          value='checked3'
          label='3'
        />
        <CheckBoxGroup
          checked={checked4}
          handleCheckBoxChange={handleCheckBoxChange('4')}
          value='checked4'
          label='4'
        />
        <CheckBoxGroup
          checked={checked5}
          handleCheckBoxChange={handleCheckBoxChange('5')}
          value='checked5'
          label='5'
        />
      </FormGroup>
    );
};

FilterBy.propTypes = {
  handleCheckBoxChange: PropTypes.func,
  checked1: PropTypes.bool,
  checked2: PropTypes.bool,
  checked3: PropTypes.bool,
  checked4: PropTypes.bool,
  checked5: PropTypes.bool,
};

OrderBy.defaultProps = {
  handleCheckBoxChange: () => {},
  checked1: false,
  checked2: false,
  checked3: false,
  checked4: false,
  checked5: true,
};
