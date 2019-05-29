import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React, { Fragment, useState } from 'react';
import { HeaderComponent } from '../../components';
import { ChartComponent } from '../../components/Chart/Chart'
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faDove, faUserCircle, faVenusMars, faBirthdayCake, faArrowAltCircleDown, faMonument } from "@fortawesome/free-solid-svg-icons";
import { Image, Label, Segment } from 'semantic-ui-react';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import { styles } from './styles';
import CountUp from 'react-countup';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/entry.nostyle';
import Calendar from 'react-calendar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

// import ModernDatepicker from 'react-modern-datepicker';
var bg = require('../../assets/tab.png')
var divBg = require('../../assets/tabtwo.png')

library.add(faUser, faDove, faUserCircle, faVenusMars, faBirthdayCake, faArrowAltCircleDown);

class PatientDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      date: new Date(),
      firstName: 'Senelith',
      lastName: 'Perera',
      gender: 'Male',
      height: '5.7',
      dateOfBirth: '03.09.2001',
      timeBreathing: '78',
      userID: '1223',
      id: '23',
      best_fev1: '673',
      best_pef: '843'
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  onChange = date => this.setState({ date })

  render() {
    const { classes } = this.props;


    var style = {
      paperContainer: {
        height: 400,
        backgroundImage: `url(${"../../src/assets/sena_jpeg.jpg"})`
      }
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <HeaderComponent title='Patient Detail' />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography gutterBottom={true} component="h2">

            {/* paper grid two size 8 */}
            <Grid container spacing={24}>
              <Grid item xl={8} xs={8} sm={8} md={8} lg={8}> {/*// second Grid (1)*/}

                {/* paper grid two size 8 */}
                <Grid container spacing={16}>
                  <Grid item xl={12} xs={12} sm={12} md={12} lg={12}>
                    <Paper className={classes.paperTwo} elevation={2}>
                      <div>
                        <ChartComponent />
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xl={12} xs={12} sm={12} md={12} lg={12}>
                    <Paper className={classes.paperTwo} elevation={2}>
                      <div container="true"
                        style={{ backgroundImage: "url(" + divBg + ")" }}
                        className={classes.dateContainer}>
                        {/* <div className={classes.datePicker}> */}
                        <Paper elevation={10} className={classes.paperCalendar}>
                          <Calendar
                            onChange={this.onChange}
                            value={this.state.date}
                          />
                        </Paper>
                      </div>

                      {/* </div> */}
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              {/* paper grid one size 4 */}
              <Grid item xl={4} xs={4} sm={4} md={4} lg={4}>
                <Paper className={classes.paperOne} elevation={2}>
                  <Paper style={{ backgroundImage: "url(" + bg + ")" }} className={classes.profileBackground} elevation={2}>
                    <Grid container={true} justify="center" alignItems="center" itemxl={12} xs={12} sm={12} md={12} lg={12} >
                      <Avatar alt="Remy Sharp" src={require('../../assets/profileback.jpeg')} className={classes.bigAvatar} />
                      <FormLabel className={classes.formLabel}>{this.state.firstName} {this.state.lastName}</FormLabel>
                    </Grid>
                  </Paper>
                  <Grid item xl={6} xs={6} sm={6} md={6} lg={6}>
                    <Paper className={classes.paperThree} elevation={2}>
                      <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin} disableRipple={true}>
                        Profile
                        </Fab>
                      {/* <Label className={classes.bioDate}><FontAwesomeIcon icon="">{this.state.dateOfBirth}</FontAwesomeIcon></Label> */}
                      <div container={true} className={classes.bioDateContainer}>
                        <Button variant="outlined" color="inherit" className={classes.bioDate} disableRipple={true}>
                          <FontAwesomeIcon icon="birthday-cake" className={classes.fontAwesomeIcon} />
                          {this.state.dateOfBirth}
                        </Button>
                        <Button variant="outlined" color="inherit" className={classes.bioDate} disableRipple={true}>
                          <FontAwesomeIcon icon="venus-mars" className={classes.fontAwesomeIcon} />
                          {this.state.gender}
                        </Button>
                        <Button variant="outlined" color="inherit" className={classes.bioDate} disableRipple={true}>
                          <FontAwesomeIcon icon="arrow-alt-circle-down" className={classes.fontAwesomeIcon} />
                          {this.state.height}m
                        </Button>
                      </div>
                    </Paper>
                  </Grid>
                  {/* <div className={classes.horizontalLine}></div> */}
                  {/* <hr className={classes.horizontalLine} /> */}
                  <Paper className={classes.PaperFour} elevation={2}>
                    <div container={true} className={classes.countupContainer}>
                      <div style={{ display: 'inline' }}>
                        {/* <formLabel className={classes.countupLabel}>Time Breathing</formLabel> */}
                          <CountUp duration={5} delay={0} end={this.state.timeBreathing} className={classes.countNumber} />
                        {/* <CountUp duration={5} delay={0} end={this.state.timeBreathing} className={classes.countNumber} /> */}
                      </div>
                      <div style={{ display: 'inline' }}>
                        {/* <formLabel className={classes.countupLabel}>best fev1</formLabel> */}
                        <CountUp duration={5} delay={0} end={this.state.best_fev1} className={classes.countNumber} />
                      </div>
                      <div style={{ display: 'inline' }}>
                        {/* <formLabel className={classes.countupLabel}>best pef</formLabel> */}
                        <CountUp duration={5} delay={0} end={this.state.best_pef} className={classes.countNumber} />
                      </div>
                    </div>
                  </Paper>
                </Paper>
              </Grid>
            </Grid>
          </Typography>
        </main>
      </div >
    );
  }
}

export const PatientDetailPage = withStyles(styles)(PatientDetail);
