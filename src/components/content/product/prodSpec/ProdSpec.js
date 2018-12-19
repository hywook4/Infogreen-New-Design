// import React from 'react';
// import './ProdSpec.css';
// // import {Header} from '../../header/Header';


// export class ProdSpec extends React.Component{
//     render(){
//         return(
//             <div>
//                 {/* <header/> */}
//                 <h1>Prodspec</h1>
//             </div>
//         )
//     }
// }


import React from 'react';
import './ProdSpec.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import {Popup} from '../content/Popup';



export class ProdSpec extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="prod_spec">
                <div className="prodspec_container">
                {/* product detail */}
                    <div className="prodspec_inner">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="prod_heading">
                                    <span className="dot"></span>
                                    <h2>Lorem Ipsum</h2>
                                </div>
                                {/* product detail */}
                                <div className="prod_detail">
                                    <div className="prod_upr_img">
                                        <div className="prod_img">
                                            <img className="img-responsive" src={ require('../../../../assets/images/product1.png') } alt=""/>
                                        </div>
                                    </div> 
                                    <div className="prod-name-detl">
                                        <h2>Product Description Info</h2>
                                    </div>

                                    <div className="prod_desp">
                                        <div className="prod_name">
                                            <p>Product 1</p>
                                            <h1>Product 1 Specification</h1>

                                        </div>
                                        <div className="prod_ratings">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                        <div className="prod_icons">
                                            <div className="prod_icon_info">
                                                <i class="fa fa-home" aria-hidden="true"></i>
                                                {/* <img src={ require('../../../../assets/images/home.svg') } alt=""/> */}
                                                <p>Save</p>
                                            </div>
                                            <div className="prod_icon_info">
                                                <i class="fa fa-heart" aria-hidden="true"></i>
                                                {/* <img src={ require('../../../../assets/images/heart.svg') } alt=""/> */}
                                                <p>Like</p>
                                            </div>
                                            <div className="prod_icon_info">
                                                <i class="fa fa-share-alt"></i>
                                                {/* <img src={ require('../../../../assets/images/checkPrice.svg') } alt=""/> */}
                                                <p>Check Price</p>
                                            </div>
                                            <div className="prod_icon_info">
                                                <i class="fa fa-share-alt"></i>
                                                {/* <img src={ require('../../../../assets/images/share.svg') } alt=""/> */}
                                                <p>Share</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                {/* finish product detail */}
                                
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="prod_right_div">
                                    <div className="prod-rt_div_inr">
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <p>Like</p>
                                    </div>
                                    <div className="prod-rt_div_inr-1">
                                    <img className="img-fluid" src={require('../../../../assets/images/icons/icon2.png')} alt=""/>
                                        {/* <i class="fa fa-heart" aria-hidden="true"></i> */}
                                        <p>Like</p>
                                    </div>
                                    <div className="prod-rt_div_inr prod-rt-people">
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <p>Like</p>
                                        <img className="img-fluid people-icon" src={require('../../../../assets/images/icons/people-icon.png')} alt=""/>
                                        {/* <i class="fa fa-heart people-icon" aria-hidden="true"></i> */}
                                        
                                    </div>
                                    <div className="prod-rt_div_inr-1 prod-icon-text">
                                        
                                        <p>Like</p>
                                        {/* <h2>120</h2> */}
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                    </div>
                                </div>
                                {/* <div className="prod_addn"> */}
                                    <div className="prod_addn_info prod-ingt-info">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                    <h1>Lorem Ipsum</h1>
                                    {/* <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                {/* finish product detIL */}

                {/* PRODUCT specification */}
                <div className="product_table">
                    <div className="prod-table-container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                            <div className="prod_addn">
                                    <div className="prod_addn_info">
                                   
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                            </div>

                            {/* danger icons */}
                            <div className="danger-icons">
                                <div className="danger-icons-inr">
                                    <div className="danger-icon-head">
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <h1>Lorem Ipsum</h1>
                                    </div>
                                    <div className="icons-all">
                                        <div className="dngr-icon-inr-div">
                                            <img className="img-fluid" src={require('../../../../assets/images/icons/danger-icon1.png')} alt=""/>
                                            <p>Danger</p>
                                        </div>
                                        <div className="dngr-icon-inr-div">
                                            <img className="img-fluid" src={require('../../../../assets/images/icons/danger-icon2.png')} alt=""/>
                                            <p>Danger</p>
                                        </div>
                                        <div className="dngr-icon-inr-div">
                                            <img className="img-fluid" src={require('../../../../assets/images/icons/danger-icon3.png')} alt=""/>
                                            <p>Danger</p>
                                        </div>
                                        <div className="dngr-icon-inr-div">
                                            <img className="img-fluid" src={require('../../../../assets/images/icons/danger-icon4.png')} alt=""/>
                                            <p>Danger</p>
                                        </div>
                                        <div className="dngr-icon-inr-div">
                                        <img className="img-fluid" src={require('../../../../assets/images/icons/danger-icon5.png')} alt=""/>
                                        <p>Danger</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="danger-icons-inr">
                                    <div className="danger-icon-head">
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <h1>Lorem Ipsum</h1>
                                    </div>   
                                    <div className="icons-all">
                                        <div className="dngr-icon-inr-div">
                                                <img className="img-fluid" src={require('../../../../assets/images/icons/sales.png')} alt=""/>
                                                <p>Danger</p>
                                            </div>
                                        <div className="dngr-icon-inr-div">
                                                <img className="img-fluid" src={require('../../../../assets/images/icons/danger-icon7.png')} alt=""/>
                                                <p>Danger</p>
                                            </div>
                                        <div className="dngr-icon-inr-div">
                                                <img className="img-fluid" src={require('../../../../assets/images/icons/danger-icon8.png')} alt=""/>
                                                <p>Danger</p>
                                            </div>
                                        <div className="dngr-icon-inr-div">
                                                <img className="img-fluid" src={require('../../../../assets/images/icons/danger-icon9.png')} alt=""/>
                                                <p>Danger</p>
                                            </div>
                                        <div className="dngr-icon-inr-div">
                                            <img className="img-fluid" src={require('../../../../assets/images/icons/danger-icon10.png')} alt=""/>
                                            <p>Danger</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            {/* danger icons div finish */}
                            {/* ingredients icons */}
                                <div className="ingr-table">
                                    <div className="container">
                                    <div className="prod-ingr-ctn">
                                    <div className="prod-ingr-upr-div">
                                        <div className="prod-ingr-tbl-name">
                                            <i class="fa fa-heart" aria-hidden="true"></i>
                                            <h1>Lorem Ipsum</h1>
                                        </div>
                                        <div className="prod-ingr-tbl">
                                            <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>S.No</th>
                                                    <th>Ingredients</th>
                                                    <th>Icons</th>
                                                    <th>Description</th>
                                                </tr>
                                                {/* <Router> */}
                                                    {/* <link to="/popup_ingredients"> */}
                                                        <tr data-toggle="modal" data-target="#exampleModalCenter">
                                                            <td>
                                                                <img className="img-responsive icon_img" src={require('../../../../assets/images/icons/iconA.png')} alt=""/>
                                                            </td>
                                                            <td>
                                                                <p className="prod_ingr_desp">Icon</p>
                                                                <p>Water</p>
                                                            </td>
                                                            <td>
                                                                <img className="img-responsive icon_img" src={ require('../../../../assets/images/icons/icon1.png') } alt=""/>

                                                                {/* <i class="fa fa-heart" aria-hidden="true"></i> */}
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                    {/* </link>  */}
                                                    {/* <link to="/popup_ingredients">   */}
                                                        <tr data-toggle="modal" data-target="#exampleModalCenter">
                                                        <td>
                                                            <img className="img-responsive icon_img" src={require('../../../../assets/images/icons/iconB.png')} alt=""/>
                                                        </td>
                                                            <td>
                                                                <p className="prod_ingr_desp">Icon</p>
                                                                <p>Water</p>
                                                            </td>
                                                            <td>
                                                                <i class="fa fa-heart" aria-hidden="true"></i>
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                    {/* </link> */}
                                                    {/* <link to="/popup_ingredients">       */}
                                                        <tr data-toggle="modal" data-target="#exampleModalCenter">
                                                        <td>
                                                            <img className="img-responsive icon_img" src={require('../../../../assets/images/icons/iconC.png')} alt=""/>
                                                        </td>
                                                            <td>
                                                                <p className="prod_ingr_desp">Icon</p>
                                                                <p>Water</p>
                                                            </td>
                                                            <td>
                                                                <i class="fa fa-heart" aria-hidden="true"></i>
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                    {/* </link> */}
                                                    {/* <link to="/popup_ingredients">       */}
                                                        <tr data-toggle="modal" data-target="#exampleModalCenter">
                                                        <td>
                                                            <img className="img-responsive icon_img" src={require('../../../../assets/images/icons/iconD.png')} alt=""/>
                                                        </td>
                                                            <td>
                                                                <p className="prod_ingr_desp">Icon</p>
                                                                <p>Water</p>
                                                            </td>
                                                            <td>
                                                                <i class="fa fa-heart" aria-hidden="true"></i>
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                                    {/* </link> */}

                                                    {/* <div className="popup-route"> */}
                                                        {/* <Route exact path="/popup_ingredients" Component={Popup} /> */}
                                                        {/* Modal */}
                                                            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                                <div className="modal-custom modal-dialog modal-dialog-centered" role="document">
                                                                    <div className="modal-content">
                                                                    <div className="modal-custom-header modal-header">
                                                                        <img src={require('../../../../assets/images/icons/sales.png')} alt=""/>
                                                                        <h5 className="modal-title" id="exampleModalLongTitle">Ingredients</h5>
                                                                        <p>-4-isothiazolin-3-one</p>
                                                                        <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-custom-body modal-body">
                                                                        <p className="modal-para">EWG</p>
                                                                        <div className="popup-icon-detail">
                                                                            <img src={require('../../../../assets/images/icons/iconD.png')} alt=""/>
                                                                            <p>Name</p>
                                                                            <p className="popup-ingr-para">Ingredient Detail</p>
                                                                        </div>
                                                                        <p className="modal-para">EWG</p>
                                                                        <div className="popup-icon-level">
                                                                            <img src={require('../../../../assets/images/icons/icon1.png')} alt=""/>
                                                                            <p>Ingredient Transparency Level EPA</p>
                                                                        </div>
                                                                        <div className="popup-category">
                                                                            <p className="modal-para">Product</p>
                                                                        </div>
                                                                        <div className="popup-icon-level">
                                                                            <img src={require('../../../../assets/images/icons/icon1.png')} alt=""/>
                                                                            <p>Harmful by the Korean Government</p>
                                                                        </div>
                                                                        <div className="popup-category">
                                                                            <p className="modal-para">Product</p>
                                                                        </div>
                                                                        <div className="popup-result">
                                                                            <p>Result</p>
                                                                        </div>
                                                                    </div>
                                                                    {/* <div className="modal-footer">
                                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                        <button type="button" className="btn btn-primary">Save changes</button>
                                                                    </div> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    {/* </div>     */}
                                                {/* </Router> */}
                                            </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                </div>
                            {/* finish ingredients icons */}
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="pie_chart">

                                </div>
                                <div className="alpha-icon">
                                    <div className="alpha-icon-info">
                                        <img src={require('../../../../assets/images/icons/iconX.png')} alt=""/>
                                        <p>X-ray</p>

                                    </div>
                                    <div className="alpha-icon-info">
                                        <img src={require('../../../../assets/images/icons/iconA.png')} alt=""/>
                                        <p>X-ray</p>
                                    </div>
                                    <div className="alpha-icon-info">
                                        <img src={require('../../../../assets/images/icons/iconB.png')} alt=""/>
                                        <p>X-ray</p>
                                    </div>
                                    <div className="alpha-icon-info">
                                        <img src={require('../../../../assets/images/icons/iconC.png')} alt=""/>
                                        <p>X-ray</p>
                                    </div>
                                    <div className="alpha-icon-info">
                                        <img src={require('../../../../assets/images/icons/iconD.png')} alt=""/>
                                        <p>X-ray</p>
                                    </div>
                                    <div className="alpha-icon-info">
                                        <img src={require('../../../../assets/images/icons/iconF.png')} alt=""/>
                                        <p>X-ray</p>
                                    </div>
                                </div>
                                <div className="pie-chart-info">
                                    <div className="pie-icon">
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                    </div>
                                    <div className="pie-info">
                                        <h3>Lorem Ipsum</h3>
                                        <p>Pie Chart design according to calculations.</p>
                                    </div>
                                </div>

                                {/* desp in green */}
                                <div className="desp-green">
                                    <div className="desp-greenery">
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <h1>greenery</h1>
                                        <p>greenery: F-A10B-C001001-A150</p>
                                    </div>
                                    <div className="desp-greenery-img">
                                        <img src={require('../../../../assets/images/icons/icon1.png')} alt=""/>
                                    </div>
                                    <div className="desp-greenery-rslt">
                                        <h1>Greenery Description Result</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* finish product specification */}
                </div>
            </div>
        );
    };
}
