import React from 'react';
import './Category.css';
import { Card, Image, Rating } from 'semantic-ui-react';


export const CategoryImg = (props) =>{
        return(
            <div className="ctgy-inrimg-div">
                <div className="ctgy-img-desp-div">
                    <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="sub-ctgy-img">
                            <img className="img-fluid" src={require('../../../../assets/images/product1.png')} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="sub-ctgy-desp">
                            <p>Product</p>
                            <h4>Description(Sonett)</h4>
                            <h1>Sub Category</h1>
                        </div>
                        <div className="sub-ctgy-rating">
                            <img src={require('../../../../assets/images/icons/icon-ef.png')} alt=""/>
                            <p>Lorem</p>
                            <Rating icon='heart' defaultRating={props.rating} maxRating={5} disabled/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    };
    // export default CategoryImg;
