import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

const state = {
    labels: ['Individuals', 'Companies'],
    datasets: [
        {
            label: true,
            backgroundColor:  ["#1bfbe4", "#ff56ee"] ,
            borderWidth: 1,
            data: [284, 364]
        }
    ]
}



class TotalSignups extends Component {
    render() {
        return (
            <div>
                <Doughnut
                    data={state}

                    width={650}
                    height={350}
                    options={{
                        title:{
                            display:true,
                            text:'TotalSignups',
                            fontSize:20,
                            position: 'top'
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                        maintainAspectRatio:false,
                        cutoutPercentage: 80
                    }}

                />
            </div>
        );
    }
}

export default TotalSignups;