import React, { Component } from 'react'
import { Image, Input  } from 'semantic-ui-react';
import './Tips.css';
import DescriptionSlider from '../../slider/DescriptionSlider';

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
            
            <div className="row" style={{marginTop: 150, marginBottom: 100}}>
                <div className="col-md-12" style={{backgroundColor: '#c2f0f0', height: 200, position: "absolute"}}>
                   
                    
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 slider-above">
                  
                        <h5>Some heading for the slider</h5>
                        <DescriptionSlider />

                </div>
            </div>

            <div className="row"  style={{marginTop: 100}}>
                <div className="col-md-12">
                <p><b>Some another text below</b></p>
                <p>2018/00/00</p>
                <Input placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industry' />
                </div>
            </div>
        </div>

    )
  }
}
