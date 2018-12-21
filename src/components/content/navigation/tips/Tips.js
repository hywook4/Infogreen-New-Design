import React from 'react';
import {Link} from 'react-router-dom';
import './Tips';


export const Tips = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-1">
                </div>

                <div className="col-md-2 tipsBannnerOne">
                        <h5><b>Product Name</b></h5>
                        <h6><Link to='#'>see more</Link></h6>
                </div>

                <div className="col-md-2 tipsBannnerTwo">
                </div>

                <div className="col-md-2 tipsBannnerThree">
                </div>

                <div className="col-md-2 tipsBannnerFour">
                </div>

                <div className="col-md-2 tipsBannnerFive">
                </div>

                <div className="col-sm-1">
                </div>

            </div>
        </div>
    )
}