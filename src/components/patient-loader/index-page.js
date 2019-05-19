import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import { ReviewCardComponent } from '../blog-card';
import { styles } from './styles';
import { PatientCardComponent } from '../patient-card/index-page';



class PatientLoader extends React.Component {
  state = {
    open: true,
  };

  render(props) {
    const { classes } = this.props;

    return (
      <div className={classes.root} mt={1}>
        <Grid container wrap="nowrap" spacing={24} >
          {
            this.props.jsonData.map((Data, index) => {
              return (
                <Grid item xs={3}>
                  <PatientCardComponent key={index} CardDatas={Data} />
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
