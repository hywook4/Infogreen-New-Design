import React from 'react';
import './TipEvent.css';

export const TipEvent = ()=>{
    return(
        <div className="tipEvent_container">
            <div className="tip_container_inner">
                <div className="event_tip">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 tip-event-inner">
                            <div className="tip-heading">
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <h4>Tips</h4>
                            </div>
                            <div className="tip-img">
                                <img src={require('../../../assets/images/tips-img-home.jpg')} className="img-responsive adjust" alt=""/>
                            </div>
                            {/* <img src="" alt=""/> */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 tip-event-inner">
                        <div className="tip-heading">
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <h4>Events</h4>
                            </div>
                            {/* <img src="" alt=""/> */}
                            <div className="tip-img">
                                <img src={require('../../../assets/images/events-img-home.jpg')} className="img-responsive adjust" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}