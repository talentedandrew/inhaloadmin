import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { HeaderComponent } from '../../components';
import { ChartComponent } from '../../components/Chart/Chart'
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faDove, faUserCircle, faVenusMars, faBirthdayCake, faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { styles } from './styles';

library.add(faUser, faDove, faUserCircle, faVenusMars, faBirthdayCake, faArrowAltCircleDown);

class PatientDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
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
  }


  render() {
    const { classes } = this.props;

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

                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              {/* paper grid one size 4 */}
              <Grid item xl={4} xs={4} sm={4} md={4} lg={4}>
                <Paper className={classes.paperOne} elevation={2}>
                  <Paper className={classes.profileBackground} elevation={2} >
                    <Grid container={true} justify="center" alignItems="center" itemxl={12} xs={12} sm={12} md={12} lg={12} >
                      <Avatar alt="Remy Sharp" src={require('../../assets/profileback.jpeg')} className={classes.bigAvatar} />
                    </Grid>
                  </Paper>
                  <form className={classes.detailDiv}>
                    <FormLabel className={classes.formLabel}><FontAwesomeIcon icon="user-circle" size='sm' className={classes.FontAwesomeIcon} />{this.state.firstName} {this.state.lastName}</FormLabel><br />
                    <FormLabel className={classes.formLabel}><FontAwesomeIcon icon="venus-mars" size='sm' className={classes.FontAwesomeIcon} />{this.state.gender}</FormLabel><br />
                    <FormLabel className={classes.formLabel}><FontAwesomeIcon icon="birthday-cake" size='sm' className={classes.FontAwesomeIcon} />{this.state.dateOfBirth}</FormLabel><br />
                    <FormLabel className={classes.formLabel}><FontAwesomeIcon icon="arrow-alt-circle-down" size='sm' className={classes.FontAwesomeIcon} />{this.state.height}</FormLabel><br />
                    <FormLabel className={classes.formLabel}><FontAwesomeIcon icon="user-circle" size='sm' className={classes.FontAwesomeIcon} />{this.state.best_fev1}</FormLabel><br />
                    <FormLabel className={classes.formLabel}><FontAwesomeIcon icon="user-circle" size='sm' className={classes.FontAwesomeIcon} />{this.state.best_pef}</FormLabel><br />

                  </form>
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
