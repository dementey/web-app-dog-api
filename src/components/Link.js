import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const Link = ({ active, children, onClick, classes}) => (
    <Button
       onClick={onClick}
       disabled={active}
       className={classes.button}
       variant="contained"
    >
      {children}
    </Button>
 
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
 
}

export default withStyles(styles)( Link);
