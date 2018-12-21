import React from 'react';
import '../login/Login.css';
import {LoginSignupProfile} from '../../navigation/login/LoginSignupProfile';
import {LoginSignupPopup} from '../login/LoginSignupPopup';


export class Signup extends React.Component{
    render(){
        return(
            <div className="container">
           
               <div className="login-container">
                    
                    <LoginSignupProfile/>
                    <div>
                        <div className="login-btn">
                            <p>Please SignUp</p>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">SignUp</button>
                        </div>
                    </div>
                </div>
                <LoginSignupPopup/>
                
               
            </div>
        )
    }
}