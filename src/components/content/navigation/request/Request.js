import React from 'react';
import './Request.css';
import '../login/Login.css';
import {LoginSignupProfile} from '../login/LoginSignupProfile';


export class Request extends React.Component{
    render(){
        return(
            <div className="container">
           
            <div className="login-container">
                 
                 <LoginSignupProfile/>
                 <div className="request-setting">
                    <i class="fa fa-gear"></i>
                    <p>Setting</p>
                 </div>
                 <div>
                     <div className="login-btn request-user">
                         <h1>User</h1>
                         
                     </div>
                 </div>
             </div>
            
             
            
         </div>
        )
    }
}