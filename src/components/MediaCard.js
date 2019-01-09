import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    height: 400,
  },
};

function MediaCard(props) {
  const { classes, srcImg, cbOnClick } = props;
  return (
    <Card className={classes.card} onClick={cbOnClick}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={srcImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Breed
          </Typography>
          <Typography component="p">
            {srcImg}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);