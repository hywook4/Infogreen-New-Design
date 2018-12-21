import React from 'react';
import './Category.css';
import {Checkbox} from './Checkbox';
import {CategoryImg} from './categoryImg';


export class HighestProduct extends React.Component{

    render(){
        return(
            <div className="high-prod-div">
                <div className="high-prod-inr-div">
                    <div className="high-prod-heading">

                    <div class="tab-content">
						<div class="tab-pane active" id="tab_default_1">
                        <Checkbox/>
                        <CategoryImg/>
                            
						</div>
						<div class="tab-pane" id="tab_default_2">
                            <Checkbox/>
                            <CategoryImg/>
						</div>
						<div class="tab-pane" id="tab_default_3">
                            <Checkbox/>
                            <CategoryImg/>
                            
						</div>
					</div>
                     
                        
                       

                    </div>
                    {/* <div className="high-prod-heading"></div>
                    <div className="high-prod-heading"></div>
                    <div className="high-prod-heading"></div>
                    <div className="high-prod-heading"></div> */}
                </div>
            </div>
        )
    }
}