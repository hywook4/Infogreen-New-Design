import React from 'react';
import './ProdSpec.css';

export class ProdSpec extends React.Component{
    
renderRatings=(config)=>{
    return(
    <div className="prod_ratings row" style={{borderBottom:config.border?'2px solid #c1bfbf':'0px',marginBottom:(config.border?20:0)}}>
        <p className="col-md-3" style={{textAlign:'center',lineHeight:'14px'}}>
            <span style={{fontSize:14,fontWeight:(!config.hideSubHeading?'bold':'normal')}}>{config.text}</span><br/>
            {!config.hideSubHeading && <span style={{fontSize:'10px',color:'rgb(156, 156, 156)'}}>(fusica)</span>}
        </p>
        <div className="col-md-9">
        <i className={`fa fa-star${(config.selected>=1?'':'-o')}`} style={{color:(config.selected>=1?'#60b3a2':'grey'),fontSize:'20px'}} aria-hidden="true"></i>
            <i className={`fa fa-star${(config.selected>=2?'':'-o')}`} style={{color:(config.selected>=2?'#60b3a2':'grey'),fontSize:'20px'}} aria-hidden="true"></i>
            <i className={`fa fa-star${(config.selected>=3?'':'-o')}`} style={{color:(config.selected>=3?'#60b3a2':'grey'),fontSize:'20px'}} aria-hidden="true"></i>
            <i className={`fa fa-star${(config.selected>=4?'':'-o')}`} style={{color:(config.selected>=4?'#60b3a2':'grey'),fontSize:'20px'}} aria-hidden="true"></i>
            <i className={`fa fa-star${(config.selected>=5?'':'-o')}`} style={{color:(config.selected>=5?'#60b3a2':'grey'),fontSize:'20px'}} aria-hidden="true"></i>
        </div>
        <div style={{clear:'both'}}></div>
    </div>
    )
}


renderRenderThirdSection=()=>{
    return(
        <div className="col-md-12" style={{paddingTop:'40px',paddingBottom:'40px',paddingRight:'150px',paddingLeft:'150px'}}>
            <div className="row" style={{marginLeft:'150px'}}>
            <div className="row col-md-12">
                <h3 style={{color:'#666666',marginBottom:30,fontSize:'18px'}}>
                    <i style={{fontSize:'18px',color:'#b3b3b3',marginRight:10}} className="fa fa-heart"></i> 
                    Section Title
                </h3>
            </div>
            <div className="col-md-4 row">
                <i className="fa fa-user-circle-o userInsignia"></i>
                <span style={{textAlign:'center',display:'inline-block',lineHeight:'18px',paddingTop:'10px',borderRight:'2px solid grey',marginRight:15,paddingRight:15}}>
                    <b style={{fontSize:'18px'}}>lorem</b><br/>
                    <span style={{fontSize:'10px',color:'#666666'}}>sub / head</span>
                </span> 
                <span style={{display:'inline-block',lineHeight:'18px',paddingTop:'10px'}}>
                    ipsum<br/>
                    <span style={{fontSize:'10px',color:'#666666'}}>lipsum</span>
                </span> 
                <span style={{marginLeft:5,textAlign:'center',display:'inline-block',lineHeight:'18px',paddingTop:'10px'}}>
                    Nulla<br/>
                    <span style={{fontSize:'10px',color:'#666666'}}>dolore</span>
                </span>    
                    
            </div>
            <div className="col-md-12" style={{marginBottom:'10px'}}>&nbsp;</div>
                <div className="col-md-5 row">
                            {this.renderRatings({selected:3,text:'dolore',hideSubHeading:true})}
                            {this.renderRatings({selected:4,text:'nulla',hideSubHeading:true})}
                            {this.renderRatings({selected:5,text:'fusica',hideSubHeading:true})}
                            {this.renderRatings({selected:2,text:'lorem',hideSubHeading:true})}
                </div>

                <div className="col-md-7 imageCollection-second">
                    <div style={{position:'relative'}}>
                        <div className="imageContent-100">
                                <img className="img-responsive" src="http://lorempixel.com/200/201/sports/" alt="sample"/>
                            </div>
                            <div className="imageContent-100">
                                <img className="img-responsive" src="http://lorempixel.com/200/202/sports/" alt="sample"/>
                            </div>
                            <div className="imageContent-100">
                                <img className="img-responsive" src="http://lorempixel.com/200/203/sports/" alt="sample"/>
                            </div>
                            <div className="imageContent-100">
                                <img className="img-responsive" src="http://lorempixel.com/200/204/sports/" alt="sample"/>
                            </div>
                            <div className="imageContent-100">
                                <img className="img-responsive" src="http://lorempixel.com/200/205/sports/" alt="sample"/>
                                <div className="overlayBox">
                                    <h3>3</h3>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>)
}


renderRenderSecondSection=()=>{
    return(
        <React.Fragment>
            <div className="col-md-12" style={{paddingLeft:'150px'}}>
                        <div className="prod_heading" style={{width:'auto',margin:'auto',marginBottom:30}}>
                            <span className="dot" style={{background:'#60b3a2'}}></span>
                            <h2>Lorem Ipsum</h2>
                        </div>
                    </div>
                    <div className="col-md-12" style={{backgroundColor:'#ddf3f0',paddingTop:'40px',paddingBottom:'40px',paddingRight:'150px',paddingLeft:'150px'}}>
                        <div className="row" style={{marginLeft:'150px'}}>
                            <div className="col-md-4 row">
                                        {this.renderRatings({selected:4,border:true,text:'4.0'})}
                                        {this.renderRatings({selected:5,text:'dolore',hideSubHeading:true})}
                                        {this.renderRatings({selected:2,text:'nulla',hideSubHeading:true})}
                                        {this.renderRatings({selected:3,text:'fusica',hideSubHeading:true})}
                                        {this.renderRatings({selected:4,text:'lorem',hideSubHeading:true})}
                            </div>

                            <div className="col-md-8 imageCollection">
                            <div style={{textAlign:'right',marginBottom:20}}>
                                <a href="#" style={{color:'#60b3a2'}}>More <i className="fa fa-chevron-right"></i></a> <br/>
                            </div>
                            <div style={{position:'relative'}}>
                                <div className="imageContent-150">
                                        <img className="img-responsive" src="http://lorempixel.com/200/200/sports/" alt="sample"/>
                                    </div>
                                    <div className="imageContent-150">
                                        <img className="img-responsive" src="http://lorempixel.com/200/207/sports/" alt="sample"/>
                                    </div>
                                    <div className="imageContent-150">
                                        <img className="img-responsive" src="http://lorempixel.com/200/208/sports/" alt="sample"/>
                                    </div>
                                    <div className="imageContent-150">
                                        <img className="img-responsive" src="http://lorempixel.com/200/209/sports/" alt="sample"/>
                                    </div>
                                    <div className="imageContent-150">
                                        <img className="img-responsive" src="http://lorempixel.com/200/210/sports/" alt="sample"/>
                                        <div className="overlayBox">
                                            <h3>32</h3>
                                        </div>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
        )
}


renderRenderCommentsSection=()=>{
    return(
        <div className="col-md-11" style={{paddingTop:'40px',paddingBottom:'40px',paddingRight:'150px',paddingLeft:'150px'}}>
                <div className="row" style={{marginLeft:'150px'}}>
                <div className="row col-md-12" style={{marginBottom:'20px'}}>
                    <h4>Comments <span style={{color:'rgb(175, 173, 173)',fontSize:'0.9rem',marginLeft:20,display:'inline-block'}}>2018 / 00 / 00</span></h4>
                </div>
                    <div className="col-md-12" style={{height:200,background:'#f2f2f2',padding:'30px'}} contentEditable="true">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="col-md-12" style={{padding:'10px'}}>
                        <ul className="right">
                            <li style={{display:'inline',marginRight:'10px'}}>
                                <i className="fa fa-heart-o" style={{marginRight:14,fontWeight:'bold',fontSize:20,color:'grey'}}></i>
                                0
                            </li>
                            <li style={{display:'inline',marginRight:'10px'}}>
                                <i className="fa fa-comment" style={{marginRight:14,fontWeight:'bold',fontSize:20,color:'grey'}}></i>
                                2
                            </li>
                            <li style={{display:'inline',marginRight:'10px'}}>
                                <button className="btn btn-primary" style={{background:'#60b3a2',borderColor:'#60b3a2',top:'0px',paddingLeft:'20px',paddingRight:'20px'}}>
                                    submit
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
}

render(){
        return(
            <React.Fragment>
            <div className="prod_spec" style={{marginTop:'100px'}}>
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
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                        <div className="prod_icons">
                                            <div className="prod_icon_info">
                                                <i className="fa fa-home" aria-hidden="true"></i>
                                                {/* <img src={ require('../../../../assets/images/home.svg') } alt=""/> */}
                                                <p>Save</p>
                                            </div>
                                            <div className="prod_icon_info">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                                {/* <img src={ require('../../../../assets/images/heart.svg') } alt=""/> */}
                                                <p>Like</p>
                                            </div>
                                            <div className="prod_icon_info">
                                                <i className="fa fa-share-alt"></i>
                                                {/* <img src={ require('../../../../assets/images/checkPrice.svg') } alt=""/> */}
                                                <p>Check Price</p>
                                            </div>
                                            <div className="prod_icon_info">
                                                <i className="fa fa-share-alt"></i>
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
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                        <p>Like</p>
                                    </div>
                                    <div className="prod-rt_div_inr-1">
                                    <img className="img-fluid" src={require('../../../../assets/images/icons/icon2.png')} alt=""/>
                                        {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                                        <p>Like</p>
                                    </div>
                                    <div className="prod-rt_div_inr prod-rt-people">
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                        <p>Like</p>
                                        <img className="img-fluid people-icon" src={require('../../../../assets/images/icons/people-icon.png')} alt=""/>
                                        {/* <i className="fa fa-heart people-icon" aria-hidden="true"></i> */}
                                        
                                    </div>
                                    <div className="prod-rt_div_inr-1 prod-icon-text">
                                        
                                        <p>Like</p>
                                        {/* <h2>120</h2> */}
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                    </div>
                                </div>
                                {/* <div className="prod_addn"> */}
                                    <div className="prod_addn_info prod-ingt-info">
                                    <i className="fa fa-heart" aria-hidden="true"></i>
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
                                        <i className="fa fa-heart" aria-hidden="true"></i>
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
                                        <i className="fa fa-heart" aria-hidden="true"></i>
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
                                            <i className="fa fa-heart" aria-hidden="true"></i>
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

                                                                {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
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
                                                                <i className="fa fa-heart" aria-hidden="true"></i>
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
                                                                <i className="fa fa-heart" aria-hidden="true"></i>
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
                                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                                            </td>
                                                            <td></td>
                                                        </tr>
                                            </thead>
                                            </table>
                                            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                    </div>
                                    <div className="pie-info">
                                        <h3>Lorem Ipsum</h3>
                                        <p>Pie Chart design according to calculations.</p>
                                    </div>
                                </div>

                                {/* desp in green */}
                                <div className="desp-green">
                                    <div className="desp-greenery">
                                        <i className="fa fa-heart" aria-hidden="true"></i>
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
            <div className="row">
                		{this.renderRenderSecondSection()}
                		{this.renderRenderThirdSection()}
                		{this.renderRenderCommentsSection()}
            </div>
            </React.Fragment>
        );
    };
}
