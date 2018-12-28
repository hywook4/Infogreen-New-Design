import React from 'react';
import './Login.css';
import {LoginSignupProfile} from '../../navigation/login/LoginSignupProfile';
import {LoginSignupPopup} from '../login/LoginSignupPopup';


export class Login extends React.Component{
    render(){
        return(
            <div className="container">
           
               <div className="login-container">
                    
                    <LoginSignupProfile/>
                    <div>
                        <div className="login-btn">
                            <p>Please Login</p>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Login</button>
                        </div>
                    </div>
                </div>
                <LoginSignupPopup/>
                
               
            </div>
        )
    }
}