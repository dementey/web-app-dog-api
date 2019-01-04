import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const pickerArray = [
  {
    value: '101',
    label: '1-DoNow',
  },
  {
    value: '102',
    label: '2-DoNext',
  },
  {
    value: '103',
    label: '3-DoSoon',
  },
  {
    value: '104',
    label: '4-Waiting',
  },
  {
    value: '105',
    label: '5-DoSomeDay',
  },
  {
    value: '106',
    label: '6-OnHoldy',
  },
];

class SimpleSelect extends React.Component {
  state = {
    priority: this.props.val,
    name: '',

  };


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.cb(event.target.value, pickerArray);
  };

  render() {
    const { classes } = this.props;

    return (

      <FormControl className={classes.formControl}>
        <InputLabel
          ref={ref => {
            this.InputLabelRef = ref;
          }}
          htmlFor="priority-simple"
        >
          Приоритет
          </InputLabel>
        <Select
          value={this.state.priority}
          onChange={this.handleChange}
          inputProps={{
            name: 'priority',
            id: 'input-with-icon-grid',
          }}
        >
          {pickerArray.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl >


    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles()(SimpleSelect);