import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function PatientCardContent(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <CountUp prefix="Peak Flow "  duration={5} delay={0} end={8} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <CountUp prefix="Time " delay={0} end={100} />
                    </Paper>
                </Grid>
                
            </Grid>
        </div>
    );
}

PatientCardContent.propTypes = {
    classes: PropTypes.object.isRequired,
};
export const PatientCardContentComponent = withStyles(styles)(PatientCardContent);