import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    minWidth: 275,
    color: '#fff',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


const Todo = ({ onClick, completed, result, id, classes }) => (
  <Grid item xs={12} sm={3} >
    <GridListTile
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      <Card className={classes.card} >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            №{id + 1} {result.name}
          </Typography>
          <Typography gutterBottom>
            {result.description}
          </Typography>
          <Typography color="secondary" gutterBottom>
            {result.time}
          </Typography>
          <Typography color="primary" gutterBottom>
            <Fragment>{result.priority.allPickerArray.map(option => (
              result.priority.picker === option.value ? option.label : true))}</Fragment>
          </Typography>
        </CardContent>
      </Card>
    </GridListTile>

  </Grid>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  result: PropTypes.object.isRequired,
}

export default withStyles(styles)(Todo);
