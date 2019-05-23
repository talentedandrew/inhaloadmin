import { CardActionArea, Paper } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Grid } from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { styles } from './styles';
import { PatientCardContentComponent } from './card-content';

class PatientCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render(props) {
    const { classes } = this.props;

    return (
      <div className={classes.card} >
        <CardActionArea className={classes.card} component={Link} to='/patient/detail'>
          <Card className={classes.card} raised={true}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title={this.props.CardDatas.topic}
              subheader="September 14, 2016"
            />
            <CardContent>

              <PatientCardContentComponent />

            </CardContent>
            <CardContent>
              <Typography component="p" className={classes.para}>
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </div>
    );
  }



}

PatientCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const PatientCardComponent = withStyles(styles)(PatientCard);