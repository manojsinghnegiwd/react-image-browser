import React from 'react';
import Slider from 'react-slick';

export default class ThumbnailSlider extends React.Component {
  render () {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: true
    };
    return (
      <div style={{width: '80%'}}>
        <Slider {...settings}>
          <div><img src="https://source.unsplash.com/random/800x600" height={100} /></div>
          <div><img src="https://source.unsplash.com/random/800x600" height={100} /></div>
          <div><img src="https://source.unsplash.com/random/800x600" height={100} /></div>
          <div><img src="https://source.unsplash.com/random/800x600" height={100} /></div>
          <div><img src="https://source.unsplash.com/random/800x600" height={100} /></div>
          <div><img src="https://source.unsplash.com/random/800x600" height={100} /></div>
        </Slider>
      </div>
    )
  }
}