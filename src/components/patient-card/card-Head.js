import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { red } from '@material-ui/core/colors';
import CountUp from 'react-countup';
import { Avatar } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: 10,
    backgroundColor: red[500],
  },
  bigAvatar: {
    backgroundColor: red[500],
    // margin: 10,
    width: 60,
    height: 60,
  }
});

const images = [
  {
    url: '/static/images/grid-list/breakfast.jpg',
    title: 'Breakfast',
    width: '100%',
  }
];

class CardHead extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid Grid container justify="center" spacing={8}>

          <Grid item xs={6} sm={6}>
            <Avatar className={classes.bigAvatar} >S</Avatar>
          </Grid>
          <Grid item xs={6} sm={6} >
            <Typography component='h1' style={{ fontSize: '20px', color: '#FFF' }}>
              {this.props.name}
            </Typography>
          </Grid>

        </Grid>
      </div>
    );

    shaliya = () => {
      console.log("Shaliya");
    }

  }
}

CardHead.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const CardHeadComponent = withStyles(styles)(CardHead);