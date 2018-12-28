import React from 'react';
import './Category.css';
import {Search} from '../../../content/search/Search';
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
                                    <h4>Category</h4>
                                    <i class="fa fa-chevron-down"></i>
                                </div>
                                {/* finish ctgy heading */}
                                <div className="ctgy-tabs">
                                    <div className="row">
                                    {/* household chemical product */}
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="ctgy-chemical-div">
                                                <h4>Household chemical product</h4>
                                                <ul className="nav nav-pills" role="tablist">
                                                
                                                    <li className="chmical-tab-ctgy nav-item"><a className="nav-link active" data-toggle="pill" href="#laundary">Laundary</a></li>
                                                    
                                                    <li className="chmical-tab-ctgy nav-item"><a className="nav-link" data-toggle="pill" href="#fabric">Fabric</a></li>
                                                  
                                                    <li className="chmical-tab-ctgy nav-item"><a className="nav-link" data-toggle="pill" href="#dishwashing">Dishwashing</a></li>
                                                  
                                                    <li className="chmical-tab-ctgy nav-item"><a className="nav-link" data-toggle="pill" href="#odor">Odor</a></li>
                                                   
                                                    <li className="chmical-tab-ctgy nav-item"><a className="nav-link" data-toggle="pill" href="#other">Other</a></li>
             
                                                </ul>
                                            </div>
 
                                        </div>
                                        {/* finish household chemical product  */}
                                        {/* cosmetics product */}
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="ctgy-cosmetics-div">
                                              
                                                    <h4>Cosmetics product</h4>
                                                    <ul className="nav nav-pills" role="tablist">
                                                     
                                                                <li className="chmical-tab-ctgy nav-item"><a className="nav-link active" data-toggle="pill" href="#soap">Soap</a></li>
                                                          
                                                                <li className="chmical-tab-ctgy nav-item"><a className="nav-link" data-toggle="pill" href="#lotion">Lotion</a></li>
                                                         
                                                                <li className="chmical-tab-ctgy nav-item"><a className="nav-link" data-toggle="pill" href="#cream">Cream</a></li>
                                                            
                                                                <li className="chmical-tab-ctgy nav-item"><a className="nav-link" data-toggle="pill" href="#oil">Oil</a></li>
                                                           
                                                                <li className="chmical-tab-ctgy nav-item"><a className="nav-link" data-toggle="pill" href="#powder">Powder</a></li>
                                                            
                                                                <li className="chmical-tab-ctgy nav-item"><a className="nav-link" data-toggle="pill" href="#hair">Hair</a></li>
                                                           
                                                                <li className="chmical-tab-ctgy nav-item"><a className="nav-link" data-toggle="pill" href="#suncare">Suncare</a></li>
                                                            
                                                                <li className="chmical-tab-ctgy nav-item"><a className="nav-link" data-toggle="pill" href="#babywipes">Babywipes</a></li>
                                                            
                                                                <li className="chmical-tab-ctgy nav-item"><a className="nav-link" data-toggle="pill" href="#other">Other</a></li>
                                                          
                                                                <li className="chmical-tab-ctgy nav-item"><a className="nav-link" data-toggle="pill" href="#other">Other</a></li>
                                                          
                                                    </ul>
                                               
                                            </div>
                                        </div>
                                        {/* finish cosmetics product*/}
                                        
                                    </div>
                                    
                                </div>
                                {/* tabs */}

                                <div className="prod-ctgy-tabs">
                                    <ProductCategory/>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}