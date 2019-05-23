import CssBaseline from '@material-ui/core/CssBaseline';
// import List from '@material-ui/core/List';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { HeaderComponent } from '../../components';
// import { mainListItems, secondaryListItems } from './listItems';
// import SimpleLineChart from './SimpleLineChart';
// import SimpleTable from './SimpleTable';
import { styles } from './styles';


class BlogDetail extends React.Component {
  state = {
    open: true,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <HeaderComponent title='Blog Detail' />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography gutterBottom={true} component="h2">
            Blog Detail
          </Typography>
        </main>
      </div>
    );
  }
}

export const BlogDetailsPage = withStyles(styles)(BlogDetail);
