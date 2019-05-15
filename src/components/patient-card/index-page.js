import { ButtonBase, CardActionArea, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router';
import { styles } from './styles';

class PatientCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render(props) {
    const { classes } = this.props;

    return (

      <CardActionArea className={classes.card} component={Link} to='/patient/detail'>
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
    return <Redirect to='/login' />
  }

}

PatientCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const PatientCardComponent = withStyles(styles)(PatientCard);