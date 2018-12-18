import React from 'react';
import ProductCard from '../../../common/ProductCard/ProductCard';

import './Laundary.css';
import fabric1 from '../../../../assets/images/fabric1.jpg';

export const Laundary =()=>{
    return(
        <div className="laundary">
            <div className="tip-heading">
                <i class="fa fa-heart" aria-hidden="true"></i>
                <h4>Laundary Detergent</h4>
            </div>
            <div className="right-div">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <ProductCard 
                            src={fabric1}
                            category={"주방세제"}
                            name={"어떤 세제"}
                            description={"어떤 설명"}
                            rating={3}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}