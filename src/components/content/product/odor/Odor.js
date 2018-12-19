import React from 'react';
import './Odor.css';
import fabric1 from '../../../../assets/images/fabric1.jpg';

export const Odor =()=>{
    return(
        <div>
            <div>
          <div className="laundary">
            <div className="tip-heading">
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <h4>Odor Eliminator</h4>
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
                        <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="laundary-img">
                            <img className="img-responsive" src={fabric1} alt=""/>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        </div>
    )
}