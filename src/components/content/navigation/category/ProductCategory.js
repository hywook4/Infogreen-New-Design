import React from 'react';
import './Category.css';
import {HighestProduct} from '../category/HighestProduct';

export class ProductCategory extends React.Component{
    render(){
        return(
            <div className="prod-ctgy-inr-div">
                <div class="tab-content prod-ctgy-tabs">
                    <div id="laundary" class="tab-pane fade in active">
                        <div className="sub-ctgy-div">
                            <h1>Sub category</h1>
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
                    <div id="fabric" class="tab-pane fade">
                    <div className="sub-ctgy-div">
                    <h1>Sub category</h1>
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
                    <div id="dishwashing" class="tab-pane fade">
                    <div className="sub-ctgy-div">
                    <h1>Sub category</h1>
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
                    <div id="odor" class="tab-pane fade">
                        <div className="sub-ctgy-div">
                        <h1>Sub category</h1>
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
                    <div id="other" class="tab-pane fade">
                        <div className="sub-ctgy-div">
                        <h1>Sub category</h1>
                                <ul className="nav nav-tabs ">
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