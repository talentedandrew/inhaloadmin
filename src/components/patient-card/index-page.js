import { CardActionArea } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Grid } from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './styles';
import { CardHeadComponent } from './card-Head';

const colorsPallat = {
  criticle: { background: 'linear-gradient(75deg, rgba(245,70,70,1) 0%, rgba(255,103,103,1) 25%, rgba(251,136,136,1) 50%, rgba(255,154,154,1) 75%, rgba(255,185,185,1) 100%)' },
  well: { background: 'linear-gradient(75deg, rgba(0,191,83,1) 0%, rgba(0,224,109,1) 25%, rgba(0,224,109,1) 50%, rgba(0,255,149,1) 75%, rgba(210,255,235,1) 100%)' },
  worse: { background: 'linear-gradient(75deg, rgba(0,184,191,1) 0%, rgba(0,216,224,1) 25%, rgba(0,216,224,1) 50%, rgba(0,246,255,1) 75%, rgba(210,241,255,1) 100%)' }
}

class PatientCard extends React.Component {
  state = {
    expanded: false,
    colorScheme: ''
  };

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (this.props.CardDatas.asthma_condition === 'criticle') {
      this.setState({ colorScheme: colorsPallat.criticle })
    } else if (this.props.CardDatas.asthma_condition === 'well') {
      this.setState({ colorScheme: colorsPallat.well })
    } else if (this.props.CardDatas.asthma_condition === 'worse') {
      this.setState({ colorScheme: colorsPallat.worse })
    }

  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render(props) {
    const { classes } = this.props;

    return (
      <div className={classes.card} >
        <CardActionArea className={classes.card} component={Link} to='/patient/detail'>
          <Card className={classNames(classes.card)} style={this.state.colorScheme} raised={true}>
            <CardContent >
              <Typography component="div">
                <CardHeadComponent name={this.props.CardDatas.topic}/>
              </Typography>
            </CardContent>
            <CardContent>

              <Typography component="h1" className={classes.para} style={{ fontSize: '30px', fontWeight: 'bold', textAlign: "center", textAlign: "center" }}>
                {this.props.CardDatas.asthma_condition}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography component="h1" className={classes.para} style={{ fontSize: '20px', textAlign: "left" }}>
                {this.props.CardDatas.topic}
              </Typography>
              <Typography component="h1" className={classes.para} style={{ fontSize: '20px', textAlign: "right", textAlign: "top" }}>
                {this.props.CardDatas.topic}
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