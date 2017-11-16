// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

import Header from './Header';
import ImagePreview from './ImagePreview';
import ThumbnailSlider from './ThumbnailSlider';

export default class Home extends Component {
  render() {

    const mainContainerStyle = {
      height: window.innerHeight,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }

    const imageSrc = 'https://source.unsplash.com/random/800x600';

    return (
      <div
        style={mainContainerStyle}>
        <Header />
        <ImagePreview
          src={imageSrc} />
        <ThumbnailSlider />
      </div>
    );
  }
}
