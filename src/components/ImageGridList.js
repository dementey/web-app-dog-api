import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
});


function ImageGridList(props) {
  const { classes, tileData } = props;

  return (
    <div className={classes.root}>
         <GridList cellHeight={160} className={classes.gridList} cols={8}>
        {tileData.map(tile => (
          <GridListTile key={tile} cols={1}>
            <img src={tile} alt={tile} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  tileData: PropTypes.array.isRequired,
};

export default withStyles(styles)(ImageGridList);