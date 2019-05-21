import React, { Component } from 'react';
import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js'
import '../../../node_modules/react-linechart/dist/styles.css';

export default class ChartComponent extends Component {

    render() {

        const data = [
            { "name": "week", "data": { "2017-01-01": 3, "2017-01-02": 4, "2017-01-03": 3, "2017-01-04": 8 } },
            { "name": "month", "data": { "2017-01-01": 5, "2017-01-02": 3, "2017-01-03": 4, "2017-01-04": 7 } }
        ];

        return (
            <div>
                <LineChart
                    width="800px"
                    height="500px"
                    xtitle="Date"
                    ytitle="Peak Flow"
                    curve={true}
                    discrete={true}
                    legend="bottom"
                    colors={["#b00", "#666"]}
                    data={data} />
            </div>

        );
    }
}