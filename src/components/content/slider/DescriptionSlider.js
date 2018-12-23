import React from 'react';
import {Slider} from "react-slick";
import {StaticCardSlider} from "../../common/staticCard/StaticCardSlider";

export default class DescriptionSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            <StaticCardSlider />
          </div>
          <div>
          <StaticCardSlider />
          </div>
          <div>
          <StaticCardSlider />
          </div>
          <div>
          <StaticCardSlider />
          </div>
          <div>
          <StaticCardSlider />
          </div>
          <div>
          <StaticCardSlider />
          </div>
         
        </Slider>
      </div>
    );
  }
}