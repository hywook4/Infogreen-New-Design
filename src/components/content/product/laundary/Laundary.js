import React from 'react';
import './Laundary.css';
import { Link } from "react-router-dom";
import fabric1 from '../../../../assets/images/fabric1.jpg';
import Route from '../Route';

// import { link } from 'fs';
// import { ProdSpec } from '../../../productSpecification/ProdSpec';
import {ProdSpec} from '../../ProdSpec';

// export const Laundary =()=>{
    export class Laundary extends React.Component{
        constructor(){
            super();
            
        }
        // componentDidMount(){
        //     const params = new URLSearchParams();
        //     params.append("name", `${this.props.description}`);
        // }
        // onClick = () => {
        //     this.props.itemSelected(this.props.description);
        //     this.props.setItemLoading(true);
        // };
        // prodList(){
        //     let path = 'newPath';
        //     this.setState({
        //         view:ProdSpec
        //     });
            
        // }
        render(){
            return(
                // <Link to={`/product/${this.props.desciption}}`} onClick={this.onClick}>
                    <div className="laundary">
                        <div className="tip-heading">
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <h4>Laundary Detergent</h4>
                        </div>
                        <div className="right-div">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="laundary-img">
                                        <img className="img-responsive" src={fabric1} alt=""/>
                                    </div>
                                </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="laundary-img">
                                            <img className="img-responsive" src={fabric1} alt=""/></div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="laundary-img">
                                        <img className="img-responsive" src={fabric1} alt=""/>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="laundary-img">
                                        <img className="img-responsive" src={fabric1} alt=""/>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="laundary-img">
                                        <img className="img-responsive" src={fabric1} alt=""/>
                                    </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="laundary-img">
                                        <img className="img-responsive" src={fabric1} alt=""/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                //  </Link>    
            );
        }    


}