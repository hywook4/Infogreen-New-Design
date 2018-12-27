import React from 'react';
import './ProdSpec.css';

import {Doughnut} from 'react-chartjs-2';


export default class DoughnutGraph extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                datasets: [{
                    data: [50,50,50,50,50,50],
                    backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#9bc659',
                    '#ce8b15',
                    '#32b8a4'

                    ],
                    hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#9bc659',
                    '#ce8b15',
                    '#32b8a4'
                    ]
                }]
                // labels: [
                //     'Pink',
                //     'Blue',
                //     'Yellow',
                //     '#9bc659',
                //     '#ce8b15',
                //     '#32b8a4'
                // ]
        }
    }
}
    render(){
       
    
    return(
       
         <div className="pie-chart-info-1">
            
            <Doughnut
	            data={this.state.chartData}
	            
	            // options={{
		            
	            // }}
            />
         </div>
       
    );
}
}
// export = DoughnutGraph;
