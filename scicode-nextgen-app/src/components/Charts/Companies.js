import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const state = {
    labels: ['Jul\'19', 'Jul\'19', 'Aug\'19', 'Sep\'19', 'Oct\'19', 'Nov\'19', 'Dec\'19'],
    datasets: [
        {
            label: false,
            backgroundColor: 'rgb(79,60,130)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [0, 9, 3, 8, 2, 12, 10]
        }
    ]
}

class Companies extends Component {
    render() {
        return (
            <div>
                <Line
                    data={state}
                    width={850}
                    height={350}
                    options={{
                        title:{
                            display:true,
                            text:'Companies',
                            fontSize:20
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    color: "rgba(0, 0, 0, 0)",
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    color: "rgba(0, 0, 0, 0)",
                                }
                            }]
                        },
                        legend: {
                            display: false
                        },
                        maintainAspectRatio:false
                    }}
                />
            </div>
        );
    }
}

export default Companies;