import React from 'react';
import './Login.css';

export class LoginSignupPopup extends React.Component{
    render(){
        return(
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered popup-modal" role="document">
                    <div class="modal-content popup-content">
                    <div class="modal-header popup-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Login and Signup</h5>
                        {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button> */}
                    </div>
                    <div class="modal-body">
                        <form action="">
                            <div className="form-group">
                                <input type="email" class="form-control form-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <input type="password" class="form-control form-input" id="exampleInputPassword1" placeholder="Password"></input>
                            </div>
                            <div className="popup-chkbox">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            </div>
                            
                            <button type="submit" className="btn btn-primary popup-btn">LogIn</button>
                            <div className="forget-pwd">
                                <p>Forget Password</p>
                                <p className="right">Remember Me</p>
                            </div>
                        </form>
                        <hr className="hr"/>
                    </div>
                    <div class="modal-footer popup-footer">
                        {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button> */}
                       <div className="popup-social-icons">
                            <a href="facebook.com">
                                <div className="icon-img">
                                
                                    <img className="img-fluid" src={require('../../../../assets/images/icons/fb.png')} alt=""/>
                                </div>
                                <div className="icon-name">
                                    <p>Facebook</p>
                                </div>
                            </a>
                       </div>
                       <div className="popup-social-icons">
                            <a href="facebook.com">
                                <div className="icon-img">
                                
                                    <img className="img-fluid" src={require('../../../../assets/images/icons/fb.png')} alt=""/>
                                </div>
                                <div className="icon-name">
                                    <p>Facebook</p>
                                </div>
                            </a>
                       </div>
                       <div className="popup-social-icons">
                            <a href="facebook.com">
                                <div className="icon-img">
                                
                                    <img className="img-fluid" src={require('../../../../assets/images/icons/fb.png')} alt=""/>
                                </div>
                                <div className="icon-name">
                                    <p>Naver</p>
                                </div>
                            </a>
                       </div>
                       <div class="col-auto">
                            <label class="sr-only" for="inlineFormInputGroup">Username</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                </div>
                                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                            </div>
                        </div>
                       <div className="popup-social-icons">
                       
                                
                                <div className="icon-email">
                                    <p>Signup</p>
                                </div>
                           
                       </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}