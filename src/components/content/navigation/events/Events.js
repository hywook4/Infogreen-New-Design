import React from 'react';
import {Link} from 'react-router-dom';
import '../tips/Tips.css';

import StaticCard from '../../../common/StaticCard/StaticCard';
import { Search } from '../../search/Search';
import Paginate from '../pagination/pagination';


export const Events = () => {
    return (
        <div className="container-fluid" style={{marginTop: 100}}>
            <div className="row">
                <div className="col-sm-1">
                </div>

                <div className="col-md-2 tipsBannnerOne">
                    <div style={{position: 'absolute', bottom: 0}}>
                        <h5><b>Product Name</b></h5>
                        <p>Some Related Text</p>
                        <h6><Link to='#'>see more ></Link></h6>
                    </div>
                        
                </div>

                <div className="col-md-2 tipsBannnerTwo">
                </div>

                <div className="col-md-2 tipsBannnerThree">
                </div>

                <div className="col-md-2 tipsBannnerFour">
                </div>

                <div className="col-md-2 tipsBannnerFive">
                </div>

                <div className="col-sm-1">
                </div>

            </div>

            <div className="row">
                <div className="col-md-12" style={{marginTop: 50, marginRight: 50}}>
                    <Search />
                </div>

            </div>

            
            <div className="row card-center">
                <div className="col-md-6">
                    <StaticCard />
                </div>
                
                <div className="col-md-6">
                    <StaticCard />
                </div>
            </div>

            <div className="row card-center">
                <div className="col-md-6">
                    <StaticCard />
                </div>
                
                <div className="col-md-6">
                    <StaticCard />
                </div>
        
            </div>

            <div className="row">
                <div className="col-md-12 center-block">
                    <Paginate />
                </div>
            
            </div>
            
            
        </div>
    )
}