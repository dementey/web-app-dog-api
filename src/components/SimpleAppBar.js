import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Pets from '@material-ui/icons/Pets';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const SimpleAppBar = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root} >
      <AppBar position="static" >
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu"  href="/">
            <Pets />
          </IconButton>
          <NavLink to="/">
            <Button variant="contained" color="primary" className={classes.button} >
              Home
          </Button></NavLink>
          <NavLink to="/bysubbreed">
            <Button variant="contained" color="primary" className={classes.button} >
              By sub-breed
          </Button></NavLink>
          <NavLink to="/randomimage">
            <Button variant="contained" color="primary" className={classes.button} >
              Random image
          </Button></NavLink>
        </Toolbar>

      </AppBar>
    </div >
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);