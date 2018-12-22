import React from 'react';
import './Category.css';
<<<<<<< HEAD:src/components/content/navigation/category/categoryImg.js
import { Rating } from 'semantic-ui-react';
=======
import { Card, Image, Rating } from 'semantic-ui-react';
import {RatingRow as Ratings} from '../../product/prodSpec/Ratings';
>>>>>>> 97975e9415af5561708d7aa5171229b4cb24f210:src/components/content/navigation/category/CategoryImg.js


export const CategoryImg = (props) =>{
   
        return(
            <div className="ctgy-inrimg-div">
                <div className="ctgy-img-desp-div">
                    <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="sub-ctgy-img">
                            <img className="img-fluid" src={require('../../../../assets/images/product1.png')} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="sub-ctgy-desp">
                            <p>Product</p>
                            <h4>Description(Sonett)</h4>
                            <h1>Sub Category</h1>
                        </div>
                        <div className="sub-ctgy-rating">
                        <div style={{display:'inline-block',textAlign:'center',lineHeight:'12px',marginBottom:'20px'}}>
                            <img style={props.imgStyle||{maxWidth:'40px'}} src={require('../../../../assets/images/icons/icon-ef.png')} alt=""/>
                            <br/>
                            <span style={{color:'grey',fontWeight:'bold',fontSize:10}}>ipsum</span>
                        </div>
                            <Ratings config={{trailingText:'0(dolore)',selected:3,hideSubHeading:true,text:'',removePadding:true,color:'#ababab'}}/>
                            {/* <Rating icon='stars' defaultRating={props.rating} maxRating={5} disabled/> */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    };