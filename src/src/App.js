import React, { Component } from 'react';
import Header from './Header'
import Quotebox from './Quotebox';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Quotebox />
      </div>
    )
  }
}

export default App;
