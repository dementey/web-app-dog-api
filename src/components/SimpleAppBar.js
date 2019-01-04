import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Pets from '@material-ui/icons/Pets';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
const styles = {
  root: {
    flexGrow: 1,
  },
};

const SimpleAppBar = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root} >
      <AppBar position="static" >
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <Pets />
          </IconButton>
          <Typography variant="h6" color="inherit">
            WEB-APP-DOG-API
          </Typography>
          <NavLink to="/">
            <Button variant="contained" >
              Home
          </Button></NavLink>
          <NavLink to="/listallbreeds" >
            <Button variant="contained" >
              List all breeds
          </Button></NavLink>
          <NavLink to="/bybreed">
            <Button variant="contained" >
              By breed
          </Button></NavLink>
          <NavLink to="/randomimage">
            <Button variant="contained" >
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