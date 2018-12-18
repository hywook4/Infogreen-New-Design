import React from 'react';
import './Header.css';
import {Tips} from '../navigation/tips/Tips';
import {About} from '../navigation/about/About';
import {Category} from '../navigation/category/Category';
import {Request} from '../navigation/request/Request';
import {Signup} from '../navigation/signup/Signup';
import {Login} from '../navigation/login/Login';
import MOMGUIDE_LOGO_WHITE from '../../../assets/images/MOMGUIDE_LOGO_WHITE.png';
 
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export const Header = ()=>{
    return(
        <div className="header">
            <div className="header_container">
                <div className="header-inner">
                    <img src={MOMGUIDE_LOGO_WHITE} alt=""/>
                    {/* <img src={ require('../../assets/images/MOMGUIDE_LOGO_WHITE.png') } /> */}
                </div>
                <Router>
                    <div className="header_router">
                        <ul>
                            <li>
                                <Link to="/">홈</Link>
                            </li>
                            <li>
                                <Link to="/category">카테고리</Link>
                            </li>
                            <li>
                                <Link to="/tips">꿀팁</Link>
                            </li>
                            <li>
                                <Link to="/request">Q&amp;A</Link>
                            </li>
                            <li>
                                <Link to="/about">소개</Link>
                            </li>
                        </ul>
                         <div className="header_search">
                            <input type="text" placeholder="검색"/>
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                        
                        <ul>
                            <li>
                                <Link to="/signup">회원가입</Link>
                            </li>
                            <li>
                                <Link to="/login">로그인</Link>
                            </li>
                        </ul>
                        <Route exact path="/tips" component={Tips} />
                        <Route path="/about" component={About} />
                        <Route path="/category" component={Category} />
                        <Route exact path="/request" component={Request} />
                        <Route path="/signup" component={Signup} />
                        <Route exact path="/login" component={Login} />
                    </div>
    
                </Router>
            </div>

        </div>
 
    )

};
