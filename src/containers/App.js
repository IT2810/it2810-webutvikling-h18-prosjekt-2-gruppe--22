import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/collapsible.css';
import '../stylesheets/poemStyle.css';
import Header from '../components/header.js';
import Checkboxes from './checkboxes.js';
import Footer from '../components/footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="content-wrapper">
            <Header />
            <Checkboxes className="wrapper" />
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
