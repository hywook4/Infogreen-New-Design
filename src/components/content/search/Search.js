import React from 'react';
import './Search.css';

export const Search =(props)=>{
    return(
        <div className="search-div">
            <div className="container">
                <div className="search_box">
                    <h1>{props.heading||'Lorem Ipsum Heading'}</h1>
                    <input type="text" placeholder={props.placeholder||'검색 예) 세제'}/>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}