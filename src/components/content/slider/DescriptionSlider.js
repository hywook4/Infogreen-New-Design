import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StaticCard from "../../common/StaticCard/StaticCard";
import './DescriptionSlider.css'

export default class DescriptionSlider extends Component {
  render() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 6
      
    };
    return (
      <div className="container">
        
        <Slider {...settings}>
          <div>
            <StaticCard />
          </div>
          <div>
            <StaticCard />
          </div>
          <div>
          <StaticCard />
          </div>
          <div>
          <StaticCard />
          </div>
          <div>
          <StaticCard />
          </div>
          <div>
          <StaticCard />
          </div>
          <div>
          <StaticCard />
          </div>
          
        </Slider>
      </div>
    );
  }
}