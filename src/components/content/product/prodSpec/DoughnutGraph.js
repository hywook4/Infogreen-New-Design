import React from 'react';
import './ProdSpec.css';

import {Doughnut} from 'react-chartjs-2';


export default class DoughnutGraph extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                datasets: [{
                    data: this.props.chartData,
                    backgroundColor: [
                    '#999999',
                    '#32B8A4',
                    '#9BC659',
                    '#F7B218',
                    '#CE8B15',
                    '#F0574C'

                    ],
                    hoverBackgroundColor: [
                    '#999999',
                    '#32B8A4',
                    '#9BC659',
                    '#F7B218',
                    '#CE8B15',
                    '#F0574C'
                    ]
                }],
                labels: [
                    '정보없음 (중간위험)',
                    '매우 낮은 위험',
                    '낮은 위험',
                    '높은 위험',
                    '높은 위험',
                    '매우 높은 위험'
                ]
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
