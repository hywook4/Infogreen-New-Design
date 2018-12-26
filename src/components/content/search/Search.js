import React from 'react';
import './Search.css';

export const Search =()=>{
    return(
        <div className="search-div">
            <div className="container">
            <div className="search_heading">사용 중이신 브랜드명 혹은, 제품명을 검색하여 유해성분이 있는지 찾아보세요</div>
                <div className="search_box">
                    <input type="text" placeholder="총 400,000개의 제품..."/>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}