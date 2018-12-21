import React from 'react';
import './Request.css';
import '../login/Login.css';
import {LoginSignupProfile} from '../login/LoginSignupProfile';
import {RequestTabs} from '../request/RequestTabs';


export class Request extends React.Component{
    render(){
        return(
            <div className="container">
           
                <div className="login-container">
                 
                    <LoginSignupProfile/>
                    <div className="request-setting">
                        <i className="fa fa-gear"></i>
                        <p>Setting</p>
                    </div>
                 
                    <div>
                        <div className="login-btn request-user">
                            <h1>User</h1>
                            
                        </div>
                        <div className="user-req-page">
                        <ul>
                            <li>
                                <p>lorem</p>
                            </li>
                            <li><p>ipsum</p></li>
                            <li><p>nulla</p></li>
                        </ul>
                    </div>
                    <div className="user-update">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        {/* <img className="img-fluid" src={require('../../../../assets/images/icons/male-user-shadow.jpg')} alt=""/> */}
                        <p>User</p>
                        <p>0</p>
                    </div>

                    {/* tabs */}
                    <div className="comment-tabs">
                        
                        <nav>
                            <div className="nav nav-tabs nav-fill nav-user-fill" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link nav-user-tabs active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                                <a className="nav-item nav-link nav-user-tabs" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
                                
                            </div>
				        </nav>
                        <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                               <RequestTabs/>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <RequestTabs/>
                            </div>
                           
                        </div>

                        
                    </div>
                </div>
             </div>
            
             
            
         </div>
        )
    }
}