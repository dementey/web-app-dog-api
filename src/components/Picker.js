import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import SimpleSelect from './SimpleSelect'


const Picker = ({ value, onChange, options, inputLabel }) => (
  <Fragment>
    Selected breed of dog - {value}
    <SimpleSelect options={options} cbOnChange={onChange} inputLabel={inputLabel}></SimpleSelect>
  </Fragment>
)

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Picker
