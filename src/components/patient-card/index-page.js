import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { styles } from './styles';
import { CardActionArea } from '@material-ui/core';

class PatientCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render(props) {
    const { classes } = this.props;

    return (
      <CardActionArea className={classes.card} onClick={this.testMethod}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
            </Avatar>
            }
            title={this.props.CardDatas.topic}
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image={this.props.CardDatas.image_url}
            title="Paella dish"
          />
          <CardContent>
            <Typography component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    );
  }

  testMethod = () => {
    console.log("clicked");
  }

}

PatientCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const PatientCardComponent = withStyles(styles)(PatientCard);