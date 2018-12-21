import React from 'react';
import './MainPage.css';
import {Header} from './content/header/Header';
import {Slider} from './content/slider/Slider';
import {Footer} from './content/footer/Footer';
import {Search} from './content/search/Search';
import {Category} from './content/navigation/category/Category';
import {Events} from './content/navigation/events/Events';
import {Login} from './content/navigation/login/Login';
import {Signup} from './content/navigation/signup/Signup';
import {Request} from './content/navigation/request/Request';
import {TipEvent} from './content/tipEvent/TipEvent';
import {Product} from './content/product/Product';
import {ProdSpec as ProductSpecification} from './content/product/prodSpec/ProdSpec';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom"

const placeHolder = ()=>{
    return (
        // this is simple placeholder for different pages, 
        // replace this component reference as you make the newer components available.
        <div style={{padding:200}}>
            <h4 style={{textAlign:'center'}}>This is just a placeHolder</h4>
            <p style={{textAlign:'center'}}>Please look at code for further instructions</p>
            <a style={{textAlign:'center',display:'block'}} href="/">Go Back</a>
        </div>
    )
}

const renderHome=()=>{
    return (
        <React.Fragment>
            <Slider/>
            <Search/>
            <Product/>
            <TipEvent/>
        </React.Fragment>
    )
}

export const MainPage = ()=>{
    return(
        
        <div className="full_main_page">
            <div className="main_inner">
                <div className="main_inner_row row">
                    <div className="col-lg-12 col-md-12 col-sm-12 main_inner_col">
                        <Router>
                            <React.Fragment>
                                <Header/>
                                
                                <div>
                                        <Route exact path="/" component={renderHome} />
                                        <Route path="/about" component={placeHolder} />
                                        <Route path="/category" component={Category} />
                                        <Route exact path="/request" component={Request} />
                                        <Route path="/signup" component={Signup} />
                                        <Route exact path="/login" component={Login} />
                                        <Route exact path="/events" component={Events} />
                                        <Route path="/product-details/:id" component={ProductSpecification} />
                                </div>
                            </React.Fragment>
                        </Router>
                    <Footer/>
                    </div>
                </div>
            </div>
        </div>
    )
};

