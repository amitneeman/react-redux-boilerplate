import React, { Component } from 'react';
import styles from './App.styles.js';

import Container from '../../containers/container/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container />
        <h1 style={styles.title}>React Redux boilerplate</h1>
      </div>
    );
  }
}

export default App;

