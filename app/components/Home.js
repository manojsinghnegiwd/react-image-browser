// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

import Header from './Header';
import ImagePreview from './ImagePreview';

export default class Home extends Component {
  render() {

    const mainContainerStyle = {
      height: window.innerHeight
    }

    const imageSrc = 'https://source.unsplash.com/random/800x600';

    return (
      <div
        style={mainContainerStyle}>
        <Header />
        <ImagePreview
          src={imageSrc} />
      </div>
    );
  }
}
