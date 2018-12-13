import React from 'react';
import './Product.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Laundary} from '../product/laundary/Laundary';
import {Fabric} from '../product/fabric/Fabric';
import {Dishwashing} from '../product/dishwashing/Dishwashing';
import {Odor} from '../product/odor/Odor';
import {Other} from '../product/other/Other';
import {BabyWipes} from '../product/babyWipes/BabyWipes';
import {Cream} from '../product/cream/Cream';
import {Hair} from '../product/hair/Hair';
import {Lotion} from '../product/lotion/Lotion';
import {Oil} from '../product/oil/Oil';
import {OtherCosmetics} from '../product/otherCosmetics/OtherCosmetics';
import {Powder} from '../product/powder/Powder';
import {Soap} from '../product/soap/Soap';
import {SunCare} from '../product/sunCare/SunCare';

export const Product=()=>{
    return(
       <div className="product">
           <div className="product_inner">
            <Router>
                <div className="product_div">
                    <div className="product-left-div">
                        <div className="product-menu">
                            <div className="product-menu-div">
                                <i class="fa fa-bars"></i>
                                <h4>Menu</h4>
                            </div>
                            <ul className="product_category">
                                <li><p>Household Product</p>
                                <ul className="prod_ctgy_inner">
                                    <li>
                                        <Link to={"/laundary"}>Laundary Detergent</Link>
                                    </li>
                                    <li>
                                        <Link to={"/fabric"}>Fabric Softener</Link>
                                    </li>
                                    <li>
                                        <Link to={"/dishwashing"}>Dishwashing Liquid</Link>
                                    </li>
                                    <li>
                                        <Link to={"/odor"}>Odor Eliminator</Link>
                                    </li>
                                    <li>
                                        <Link to={"/other"}>Other</Link>
                                    </li>
                                </ul>
                                </li>
                                <li><p>Cosmetics</p>
                                <ul className="prod_ctgy_inner">
                                    <li>
                                        <Link to={"/soap"}>Soap</Link>
                                    </li>
                                    <li>
                                        <Link to={"/lotion"}>Lotion</Link>
                                    </li>
                                    <li>
                                        <Link to={"/cream"}>Cream</Link>
                                    </li>
                                    <li>
                                        <Link to={"/oil"}>Oil</Link>
                                    </li>
                                    <li>
                                        <Link to={"/powder"}>Powder</Link>
                                    </li>
                                    <li>
                                        <Link to={"/hair"}>Hair</Link>
                                    </li>
                                    <li>
                                        <Link to={"/suncare"}>SunCare</Link>
                                    </li>
                                    <li>
                                        <Link to={"/babywipes"}>BabyWipes</Link>
                                    </li>
                                    <li>
                                        <Link to={"/othercosmetics"}>OtherCosmetics</Link>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="content-info">
                        <Route exact path="/laundary" exact={true} component={Laundary} />
                        <Route path="/fabric" component={Fabric} />
                        <Route path="/dishwashing" component={Dishwashing} />
                        <Route path="/odor" component={Odor} />
                        <Route path="/other" component={Other} />
                        
                        {/* <Route path="/other" component={Other} /> */}
                    </div> 
                    <div className="content-info-below">
                        <Route exact path="/soap" exact={true} component={Soap} />
                        <Route path="/lotion" component={Lotion} />
                        <Route path="/cream" component={Cream} />
                        <Route path="/oil" component={Oil} />
                        <Route path="/powder" component={Powder} />
                        <Route path="/hair" component={Hair} />
                        <Route path="/suncare" component={SunCare} />
                        <Route path="/babywipes" component={BabyWipes} />
                        <Route path="/othercosmetics" component={OtherCosmetics} />
                    </div>  

                </div>
            </Router>    
               




            {/* product again */}

            </div>
        </div>
      




    //   waste
    
    )
}