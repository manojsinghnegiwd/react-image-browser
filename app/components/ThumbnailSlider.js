import React from 'react';
import Slider from 'react-slick';
import ImageThumbail from './ImageThumbail';

const Images = [
  {
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  },{
    name: 'Sample.jpg',
    src: 'https://source.unsplash.com/random/800x600'
  }
]

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
          {Images && Images.map((image, index) => <div key={index}><ImageThumbail src={image.src}/></div>)}
        </Slider>
      </div>
    )
  }
}