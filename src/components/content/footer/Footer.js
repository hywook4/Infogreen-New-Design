import React from 'react';
import './Footer.css';
// import MOMGUIDE_LOGO_WHITE from '../../../assets/images/MOMGUIDE_LOGO_WHITE.png';



export const Footer = ()=>{
    return(
        <div className="footer_container">
             {/* <h1>footer</h1> */}
            <div className="container-fluid bg">
                <div className="footer">
                    <div className="row">
                        <div className="col-md-6 footer-col">
                            <div className="logofooter">
                                <img className="img-responsive dim" src={require('../../../assets/images/MOMGUIDE_LOGO_WHITE.png')} />
                            </div>
                            <p className="footer_para"><span>Lorem Ipsum<b> |</b></span>
                                <span>Lorem Ipsum <b> | </b></span>      
                                <span>Lorem Ipsum <b></b></span>
                            </p>
                            <p className="footer_para-heading">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
    
                            <p className="footer_para-heading">Copyrights @INFOGREENC Inc. All rights reserved.</p>
    
          
                        </div>
       
       
                        <div className="col-md-6 text-center footer-col">
          
                            {/* <ul className="footer-social pull-right tobottom">
                            <li><i className="fa fa-facebook social-icon facebook" aria-hidden="true"></i></li> 
                                <li><i className="fa fa-linkedin social-icon linked-in" aria-hidden="true"></i></li>
                        
                                <li><i className="fa fa-twitter social-icon twitter" aria-hidden="true"></i></li>
                            </ul> */}
                            <ul className="social-network social-circle  pull-right tobottom">
                                <li><a href="#" target="_blank" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" target="_blank" className="icoInstagram" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#" target="_blank" className="icoGoogle" title="Google +"><i className="fa fa-newspaper-o"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}