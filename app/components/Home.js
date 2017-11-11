// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

import Header from './Header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Your app</h1>
      </div>
    );
  }
}
