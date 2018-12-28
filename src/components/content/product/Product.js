import React from 'react';
import './Product.css';
import {HashRouter as Router, Route, Link} from "react-router-dom";
import { ProductList } from '../../common/ProductList/ProductList';

export const Product=()=>{
    const houseHold = [
        {
            path:'/',
            name:'Laundary Detergent',
            category:'일반 세제'
        },
        {
            path:'/fabric',
            name:'Fabric Softener',
            category:'Fabric'
        },
        {
            path:'/dishwashing',
            name:'Dishwashing Liquid',
            category:'Dish Washing'
        },
        {
            path:'/odor',
            name:'Odor Eliminator',
            category:'Odor'
        }
    ];
    const cosmetics = [
        {
            path:'/soap',
            name:'Soap',
            category:'Soap'
        },
        {
            path:'/lotion',
            name:'Lotion',
            category:'Lotion'
        },
        {
            path:'/cream',
            name:'Cream',
            category:'Cream'
        },
        {
            path:'/oil',
            name:'Oil',
            category:'Oil'
        },
        {
            path:'/powder',
            name:'Powder',
            category:'Powder'
        },
        {
            path:'/hair',
            name:'Hair',
            category:'Hair'
        },
        {
            path:'/suncare',
            name:'Suncare',
            category:'Sun Care'
        },
        {
            path:'/babywipes',
            name:'Babywipes',
            category:'Baby Wipes'
        },
        {
            path:'/othercosmetics',
            name:'Other cosmetics',
            category:'Other Costmetics'
        },
    ]

    return(
       <div className="product">
           <div className="product_inner">
            <Router>
                <div className="product_div">
                    <div className="product-left-div">
                        <div className="product-menu">
                            <div className="product-menu-div">
                                <i className="fa fa-bars"></i>
                                <h4 className="wow slideInDown">Menu</h4>
                            </div>
                            <ul className="product_category">
                                <li>
                                    <p className="wow slideInDown">Household Product</p>
                                    <ul className="prod_ctgy_inner">
                                        {houseHold.map((d,i)=><li key={i}><Link to={d.path}>{d.name}</Link></li>)}
                                    </ul>
                                </li>
                                <li>
                                    <p className="wow slideInDown">Cosmetics</p>
                                    <ul className="prod_ctgy_inner">
                                        {cosmetics.map((d,i)=><li key={i}><Link to={d.path}>{d.name}</Link></li>)}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="content-info">
                        {houseHold.map((d,i)=><Route key={i} path={d.path} exact={true} component={()=><ProductList category={d.category}/>} />)}
                    </div> 
                    <div className="content-info-below">
                        {cosmetics.map((d,i)=><Route key={i} path={d.path} exact={true} component={()=><ProductList category={d.category}/>} />)}
                    </div>  

                </div>
            </Router>    

            </div>
        </div>
    )
}