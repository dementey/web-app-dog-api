import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function ContainedButtons(props) {
    const { classes, cbOnClick } = props;
    return (
        <div>
            <Button variant="contained" color="secondary" className={classes.button} onClick={cbOnClick}>
                Refresh
            </Button>
        </div>
    );
}

ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
    cbOnClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(ContainedButtons);