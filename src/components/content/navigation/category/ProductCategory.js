import React from 'react';
import './Category.css';
import {HighestProduct} from '../category/HighestProduct';

export class ProductCategory extends React.Component{
    render(){
        return(
            <div className="prod-ctgy-inr-div">
                <div class="tab-content prod-ctgy-inr-tabs">
                    <div id="laundary" className="tab-pane show active">
                        <div className="sub-ctgy-div">
                            <h1 className="wow slideInDown">Sub category</h1>
                            <ul className="nav nav-tabs">
                                <li className="active">
                                    <a href="#tab_default_1" data-toggle="tab">
                                    Highest Rating </a>
                                </li>
                                <li>
                                    <a href="#tab_default_2" data-toggle="tab">
                                    Highest Viewed </a>
                                </li>
                                <li>
                                    <a href="#tab_default_3" data-toggle="tab">
                                    Highest Newest </a>
                                </li>
                            </ul>
                        </div>

                        
                    </div>
                    <div id="fabric" className="tab-pane fade">
                    <div className="sub-ctgy-div">
                    <h1 className="wow slideInDown">Sub category</h1>
                            <ul className="nav nav-tabs">
                                <li className="active">

                                    <a href="#tab_default_1" data-toggle="tab">
                                    
                                    Highest Rating </a>
                                </li>
                                <li>
                                    <a href="#tab_default_2" data-toggle="tab">
                                    Highest Viewed</a>
                                </li>
                                <li>
                                    <a href="#tab_default_3" data-toggle="tab">
                                    Highest Newest</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="dishwashing" className="tab-pane fade">
                    <div className="sub-ctgy-div">
                    <h1 className="wow zoomInDown">Sub category</h1>
                            <ul className="nav nav-tabs ">
                                <li className="active">
                                    <a href="#tab_default_1" data-toggle="tab">
                                    Highest Rating </a>
                                </li>
                                <li>
                                    <a href="#tab_default_2" data-toggle="tab">
                                    Highest Viewed</a>
                                </li>
                                <li>
                                    <a href="#tab_default_3" data-toggle="tab">
                                    Highest Newest</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="odor" className="tab-pane fade">
                        <div className="sub-ctgy-div">
                        <h1 className="wow zoomInDown">Sub category</h1>
                                <ul className="nav nav-tabs ">
                                    <li className="active">
                                        <a href="#tab_default_1" data-toggle="tab">
                                        Highest Rating </a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_2" data-toggle="tab">
                                        Highest Viewed </a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_3" data-toggle="tab">
                                        Highest Newest</a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                    <div id="other" className="tab-pane fade">
                        <div className="sub-ctgy-div">
                        <h1 className="wow zoomInDown">Sub category</h1>
                                <ul className="nav nav-tabs">
                                    <li className="active">
                                        <a href="#tab_default_1" data-toggle="tab">
                                        Highest Rating  </a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_2" data-toggle="tab">
                                        Highest Viewed</a>
                                    </li>
                                    <li>
                                        <a href="#tab_default_3" data-toggle="tab">
                                        Highest Newest </a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>


                <div className="prod-highest-category">
                    <HighestProduct/>
                </div>
            </div>
        )
    }
}