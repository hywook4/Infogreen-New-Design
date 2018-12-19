import React from 'react';
import './MainPage.css';
import {Header} from './content/header/Header';
import {Product} from './content/product/Product';
import {Slider} from './content/slider/Slider';
import {Footer} from './content/footer/Footer';
import {Search} from './content/search/Search';
import {TipEvent} from './content/tipEvent/TipEvent';
// import {Product} from './content/product/Product';
// import {ProdSpec} from './content/ProdSpec';
// import {Route} from './content/product/Route';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const MainPage = ()=>{
    return(
        <div className="full_main_page">
            <div className="main_inner">
                <div className="main_inner_row row">
                    <div className="col-lg-12 col-md-12 col-sm-12 main_inner_col">
                    <Header/>
                    <Slider/>
                    <Search/>
                    <Product/>
                    <TipEvent/>
                    <Footer/>
                    {/* <Product/> */}
                    {/* <ProdSpec/> */}
                    {/* <ProdSpec/> */}
                    
                    {/* {this.props.children} */}
                    
                  
                    {/* <SliderDemo/> */}
                    </div>
                </div>
            </div>
        </div>
    )
};

