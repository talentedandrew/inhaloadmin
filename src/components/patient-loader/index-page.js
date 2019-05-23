import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import { ReviewCardComponent } from '../blog-card';
import { styles } from './styles';
import { PatientCardComponent } from '../patient-card/index-page';

import classNames from 'classnames';


class PatientLoader extends React.Component {
  state = {
    open: true,
  };

  render(props) {
    const { classes } = this.props;

    return (
      <div className={classes.root} mt={1}>
        <Grid container spacing={2} >
          {
            this.props.jsonData.map((Data, index) => {
              return (
                <Grid item xl={3} xs={12} sm={6} md={3}  lg={3}  key={index} >
                  <PatientCardComponent CardDatas={Data} />
                </Grid>
              );
            })
          }
        </Grid>
      </div>
    );
  }
}

export const PatientLoaderComponent = withStyles(styles)(PatientLoader);
