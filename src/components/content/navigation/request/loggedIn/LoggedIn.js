import React from 'react';
import './LoggedIn.css';


export class LoggedIn extends React.Component{
    render=()=>{
    return(
        <React.Fragment>
        <div className="loggedin">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="container">
                            <div className="log-inr-div">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="ingr-anly">
                                      
                                                <div className="inr-ingr">
                                                <a href="#" className="ingr-anchor">
                                                    <h2 className="wow slideInDown">Ingredient Analysis</h2>
                                                    <p className="wow slideInDown">Analyze all ingredients</p>
                                                </a>
                                                </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="ingr-anly">
                                        
                                            <div className="inr-ingr">
                                            <a href="#" className="ingr-anchor">
                                                <h2 className="wow slideInDown">Ask the Admin</h2>
                                                <p className="wow slideInDown">Take Permission</p>
                                            </a>    
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        </React.Fragment>
    )
}
}




