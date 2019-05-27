import React, { Component } from 'react';
import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js'
import '../../../node_modules/react-linechart/dist/styles.css';
import { styles } from './styles';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

class ChartComponentt extends Component {

    render() {
        const { classes } = this.props;

        const data = [
            { "name": "week", "data": { "2017-01-01": 3, "2017-01-02": 4, "2017-01-03": 3, "2017-01-04": 8 } },
            { "name": "month", "data": { "2017-01-01": 5, "2017-01-02": 3, "2017-01-03": 4, "2017-01-04": 7 } }
        ];

        return (
            <Grid container spacing={24}>
                <Grid container={true} item xl={12} xs={10} sm={8} md={6} lg={4}> 
                    <div className={classes.chartPaper}>
                        <LineChart
                            width='115vh'
                            height='40vh'
                            xtitle="Date"
                            ytitle="Peak Flow"
                            curve={true}
                            discrete={true}
                            legend="bottom"
                            colors={["#b00", "#666"]}
                            data={data} />
                    </div>
                </Grid>
            </Grid>

        );
    }
}
export const ChartComponent = withStyles(styles)(ChartComponentt);