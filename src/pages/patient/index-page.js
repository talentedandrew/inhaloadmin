import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { BlogLoaderComponent,PatientLoaderComponent, HeaderComponent } from '../../components/index';
import { styles } from './styles';
import { keys } from '@material-ui/core/styles/createBreakpoints';
const SimpleData = require('../../assets/simpleData');
import ResponsiveDrawer from "./Slider";

class PatientIndex extends React.Component {
  state = {
    open: true,
  };


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <HeaderComponent title='Blog' />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography gutterBottom={true} component="h2">
            {
              SimpleData.map((Data, index) => {
                return (
                  <PatientLoaderComponent key={index} jsonData={Data} />
                );
              })
            }
          </Typography>
        </main>
      </div>
    );
  }
}

export const PatientPage = withStyles(styles)(PatientIndex);
