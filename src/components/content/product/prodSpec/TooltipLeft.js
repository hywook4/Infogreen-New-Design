import React from 'react';
import './ProdSpec.css';

export class TooltipLeft extends React.Component{
    render(){
        return(
            <div className="tooptip-div">
                <div className="inner-tooltip-div">
                    <div className="tooltip-img">
                        <img src={require('../../../../assets/images/icons/iconA.png')} alt=""/>
                    </div>
                    <div className="tooltip-content">
                        <h2><b>Ingredient(C8-16)</b></h2>
                        <p>Alkyl polyglucoside(C8-16)</p>
                    </div>
                </div>
            </div>
        )
    }
}