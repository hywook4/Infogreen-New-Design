import React from 'react';
import './Header.css';
import MOMGUIDE_LOGO_WHITE from '../../../assets/images/MOMGUIDE_LOGO_WHITE.png';
 
import { Link} from "react-router-dom";

export const Header = ()=>{
    return(
        <div className="navbar">
            <div className="navbar_container">
                <div className="navbar-inner">
                    <img src={MOMGUIDE_LOGO_WHITE} alt=""/>
                    {/* <img src={ require('../../assets/images/MOMGUIDE_LOGO_WHITE.png') } /> */}
                </div>
                    <div className="navbar_router">
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
                         <div className="navbar_search">
                            <input type="text" placeholder="검색"/>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                        
                        <ul>
                            <li>
                                <Link to="/signup">회원가입</Link>
                            </li>
                            <li>
                                <Link to="/login">로그인</Link>
                            </li>
                        </ul>
                    </div>
            </div>

        </div>
 
    )

};
