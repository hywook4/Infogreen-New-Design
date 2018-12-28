import React from 'react';
import './Category.css';
// import { Card, Image, Rating } from 'semantic-ui-react';
import {RatingRow as Ratings} from '../../product/prodSpec/Ratings';



export const CategoryImg = (props) =>{
   
        return(
            <div className="ctgy-inrimg-div">
                <div className="ctgy-img-desp-div">
                    <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="sub-ctgy-img">
                            <a href={`/product-details/${props.name}`}>
                                <img className="img-fluid" src={`http://13.125.89.0/chemical/item_img/${props.image}`} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="sub-ctgy-desp">
                            <p>{props.category}</p>
                            <h4>{props.brand}</h4>
                            <h1>{props.name}</h1>
                        </div>
                        <div className="sub-ctgy-rating">
                        <div style={{display:'inline-block',textAlign:'center',lineHeight:'12px',marginBottom:'20px'}}>
                            <img style={props.imgStyle||{maxWidth:'40px'}} src={require('../../../../assets/images/icons/epa-usa.png')} alt=""/>
                            <br/>
                            <span style={{color:'grey',fontWeight:'bold',fontSize:10}}>친환경 인증</span>
                        </div>
                            <Ratings config={{trailingText:'2 (3명)',selected:3,hideSubHeading:true,text:'',removePadding:true,color:'#ababab'}}/>
                            {/* <Rating icon='stars' defaultRating={props.rating} maxRating={5} disabled/> */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    };