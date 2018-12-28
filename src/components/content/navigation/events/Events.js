import React from 'react';
import {Link} from 'react-router-dom';
import './Events.css';
import '../tips/Tips.css';

import {StaticCard} from '../../../common/staticCard/StaticCard';
import { Search } from '../../search/Search';
import {Paginate} from '../../navigation/tips/pagination/Pagination';


export const Events = () => {
    return (
        <div className="container-fluid">
            <div className="row" style={{marginTop: 78}}>
                <div className="col-sm-1">
                </div>

                <div className="col-md-2 tipsBannnerOne">
                    <div className="tip-bnr-inr" style={{position: 'absolute', bottom: 15}}>
                        <h5 className="wow slideInDown"><b>Product Name</b></h5>
                        <p className="wow slideInDown">Some Related Text</p>
                        <h6><Link to='#'>See more
                        <i class="fa fa-angle-right"></i>
                        </Link></h6>
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
           <div className="tips-card-container">
                <StaticCard/>
                <Paginate />
           </div>
        </div>
    )
}