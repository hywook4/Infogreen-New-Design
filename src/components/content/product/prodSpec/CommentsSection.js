import React from 'react';
import './ProdSpec.css';

export const Comments = (props)=>{
    return(
        <div className="col-md-11" style={{paddingTop:'40px',paddingBottom:'40px',paddingRight:'150px',paddingLeft:'150px'}}>
                <div className="row" style={{marginLeft:'150px'}}>
                <div className="row col-md-12" style={{marginBottom:'20px'}}>
                    <h4 className="comment-h4">Comments <span style={{color:'rgb(175, 173, 173)',fontSize:'0.9rem',marginLeft:20,display:'inline-block'}}>2018 / 00 / 00</span></h4>
                </div>
                    <div className="col-md-12" style={{height:200,background:'#f2f2f2',padding:'30px', color: 'gray'}} contentEditable="true">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="col-md-12" style={{padding:'10px'}}>
                        <ul className="right">
                            <li style={{display:'inline',marginRight:'10px'}}>
                                <i className="fa fa-heart-o" style={{marginRight:14,fontWeight:'bold',fontSize:20,color:'grey'}}></i>
                                0
                            </li>
                            <li style={{display:'inline',marginRight:'10px'}}>
                                <i className="fa fa-comment" style={{marginRight:14,fontWeight:'bold',fontSize:20,color:'grey'}}></i>
                                2
                            </li>
                            <li style={{display:'inline',marginRight:'10px'}}>
                                <button className="btn btn-primary" style={{background:'#60b3a2',borderColor:'#60b3a2',top:'0px',paddingLeft:'20px',paddingRight:'20px'}}>
                                    submit
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
}