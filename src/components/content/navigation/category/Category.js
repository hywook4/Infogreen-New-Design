import React from 'react';
import './Category.css';
import Search from '../../../content/search/Search';
import {ProductCategory} from '../../navigation/category/ProductCategory';

export class Category extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="container">
                <div className="category_page">
                    <Search/>

                    <div className="category-tabs-div">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                            {/* ctgy heading */}
                                <div className="ctgy-heading">
                                    <h4>카테고리</h4>
                                    <i class="fa fa-chevron-up"></i>
                                </div>
                                {/* finish ctgy heading */}
                                <div className="ctgy-tabs">
                                    <div className="row">
                                    {/* household chemical product */}
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="ctgy-chemical-div">
                                                <h4>가정용 생활화학제품</h4>
                                                <ul className="nav nav-pills">
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                    <li className="active"><a data-toggle="pill" href="#laundary">세탁세제</a></li>
                                                    </div>
                                                    <div className="col-sm-4">
                                                    <li><a data-toggle="pill" href="#fabric">섬유유연제</a></li>
                                                    </div>
                                                    <div className="col-sm-4">
                                                    <li><a data-toggle="pill" href="#dishwashing">주방세제</a></li>
                                                    </div>
                                                    <div className="col-sm-4">
                                                    <li><a data-toggle="pill" href="#odor">탈취제</a></li>
                                                    </div>
                                                    <div className="col-sm-4">
                                                    <li><a data-toggle="pill" href="#other">기타세정제</a></li>
                                                    </div>
                                                </div>
                                                   
                                                   
                                                    
                                                    
                                                    
                                                </ul>
                                            </div>


                                            
                                        </div>
                                        {/* finish household chemical product  */}
                                        {/* cosmetics product */}
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="ctgy-cosmetics-div">
                                                {/* <div className="ctgy-chemical-div"> */}
                                                    <h4>유아용 화장품</h4>
                                                    <ul className="nav nav-pills">
                                                        <div className="row">
                                                            <div className="col-sm-4">
                                                                <li className="active"><a data-toggle="pill" href="#soap">워시</a></li>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <li><a data-toggle="pill" href="#lotion">로션</a></li>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <li><a data-toggle="pill" href="#cream">크림</a></li>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <li><a data-toggle="pill" href="#oil">오일</a></li>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <li><a data-toggle="pill" href="#powder">파우더</a></li>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <li><a data-toggle="pill" href="#hair">헤어</a></li>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <li><a data-toggle="pill" href="#suncare">선케어</a></li>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <li><a data-toggle="pill" href="#babywipes">물티슈</a></li>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <li><a data-toggle="pill" href="#handsanitizer">손세정제</a></li>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <li><a data-toggle="pill" href="#othercosmetics">기타화장품</a></li>
                                                            </div>
                                                </div>
                                                    </ul>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                        {/* finish cosmetics product*/}
                                        
                                    </div>
                                    
                                </div>
                                {/* tabs */}

                                <div className="prod-ctgy-tabs">
                                    <ProductCategory/>
                                </div>
                                {/* <div class="tab-content">
                                    <div id="laundary" class="tab-pane fade in active">
                                        <h3>HOME</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                    <div id="fabric" class="tab-pane fade">
                                        <h3>Menu 1</h3>
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                    <div id="dishwashing" class="tab-pane fade">
                                        <h3>Menu 2</h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                    </div>
                                    <div id="odor" class="tab-pane fade">
                                        <h3>Menu 3</h3>
                                        <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}