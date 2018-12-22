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
                                                <h2>Ingredient Analysis</h2>
                                                <p>Analyze all ingredients</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="ingr-anly">
                                        <div className="inr-ingr">
                                            <h2>Ask the Admin</h2>
                                            <p>Take Permission</p>
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




