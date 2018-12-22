import React, { Component } from 'react'
import { Image, Form, TextArea, Button  } from 'semantic-ui-react';
import './Tips.css';
// import DescriptionSlider from '../../slider/DescriptionSlider';
import {Comments} from '../../product/prodSpec/CommentsSection';
import Paginate from '../pagination/pagination';


export default class TipsViewMore extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="row" style={{marginTop: 180}}>
                <div className="col-md-12" style={{backgroundColor: '#c2f0f0', height: 200, padding: 45, position: "absolute"}}>
                    <h4>Some Title</h4>
                    <div className="sub-head">
                        <p>Some another text below the title</p>
                        <p>2018/00/00</p>
                    </div>
                    
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <Image src= 'http://www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg' size='large' centered className="img-large" />  
                </div>
            </div>


            <div className="row">
                <div className="col-md-12" style={{backgroundColor: '#c2f0f0', height: 200, marginTop: 80}}>

                </div>
            </div>

            <div className="row">
                <div className="col-md-12" style={{marginLeft: '22%', marginBottom: '5%', marginTop: '10%'}}>
                    <h6><b>Some Text</b>&nbsp;&nbsp;&nbsp;&nbsp;<span>2018/00/00</span></h6>
                    
                    <Form style={{width: 770}}>
                        <TextArea placeholder='Tell us more' rows="2"/>
                        <Button style={{float:'right', backgroundColor: 'rgb(96, 179, 162)', marginTop: 20}}>Submit</Button>
                    </Form>
                    
                </div>
                
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Comments />
                    
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <Paginate />
                </div>

            </div>
        </div>

    )
  }
}
