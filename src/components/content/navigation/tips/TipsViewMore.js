import React from 'react';
import { Image, Form, TextArea, Button  } from 'semantic-ui-react';
import './Tips.css';
// import DescriptionSlider from '../../slider/DescriptionSlider';
import {Comments} from '../../product/prodSpec/CommentsSection';
import {Paginate} from '../tips/pagination/Pagination';
import {DescriptionSlider} from '../../slider/DescriptionSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class TipsViewMore extends React.Component {
  render() {
    return (

        <div className="container-tipsmore">
         
                        <div className="tips-viewmore">
                            <div className="container">
                                <div className="container-viewmore">
                                    <div className="tipsmore-heading">
                                        <span className="dot"></span>
                                        <h4>Some Title</h4>
                                    </div>    
                                        <div className="sub-head">
                                            <p>Some another text below the title</p>
                                            <p className="tips-sub-para">2018/00/00</p>
                                        </div>
                                </div>
                            </div> 
                             
                        </div>   
                           
                        {/* tips card img */}
                        <div className="container">
                                <div className="tips-img">
                                        {/* <Image src= 'http://www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg' size='large' centered className="img-large" />   */}
                                    <img className="img-fluid" src={require('../../../../assets/images/tips.jpg')} alt=""/>
                                </div> 
                                <DescriptionSlider /> 
                                <div className="row">
                                    <div className="col-md-10 tips-cmnt-inr-div">
                                        <h6><b>Some Text</b>&nbsp;&nbsp;&nbsp;&nbsp;<span>2018/00/00</span></h6>
                                        
                                        <Form>
                                            <TextArea className="tips-textarea" placeholder='Tell us more' rows="3"/>
                                            <Button style={{float:'right', backgroundColor: 'rgb(96, 179, 162)', marginTop: 20}}>Submit</Button>
                                        </Form>     
                                    </div>
                                </div>
                        </div> 
                      
                        <Comments />  
                        <Paginate />

          
        </div>

    )
  }
}


 {/* description slider */}
                             {/* <div className="row">
                                    <div className="col-md-12">
                                        <DescriptionSlider />    
                                    </div>
                                </div> */}
                                {/* finish description slider */}