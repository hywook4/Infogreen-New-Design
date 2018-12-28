import React from 'react';
import './RequestComment.css';
// import '../loggedIn/LoggedIn.css';
import '../../../product/prodSpec/ProdSpec.css';
import {Comments} from '../../../product/prodSpec/CommentsSection';


export class RequestComment extends React.Component{
    render=()=>{
        return(
            <React.Fragment>

                <div>
                    <div className="req-cmnt">
                        <div className="container">
                            <div className="cmnt-desp-container">
                                <div className="cmnt-desp-inr">
                                    <h2>Comments of Product Request</h2>
                                    <p>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                    <p>Lorem Ipsum</p>
                                </div>
                                <hr/>
                                <div className="cmnt-drpdwn-div">
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-md-2">
                                                <select id="inputState" className="rqst-form-inp form-control">
                                                    <option selected>Choose</option>
                                                    <option>Default select</option>
                                                    <option>Default select</option>
                                                    <option>Default select</option>
                                                    <option>Default select</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-10">
                                                <input type="text" className="rqst-form-inp form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Comments" />
                                            </div>
                                        </div>
                                    </form>
                                
                                
                                </div>
                            </div>
                        </div>
                        <Comments/>
                        
                    </div>
                    
                </div>    
            </React.Fragment>
        )
    }        
}