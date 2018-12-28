import React from 'react';
import './Search.css';

export const Search =()=>{
    return(
        <div className="search-div">
            <div className="container">
                <div className="search_box">
                    <h3 className="wow slideInDown search_heading">Search Products</h3>
                    <input type="text" placeholder="검색 예) 세제"/>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}