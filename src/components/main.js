import React, { Component } from 'react';
import '../stylesheets/App.css';
import Menu from './menu.js';
import Checkboxes from './checkboxes.js';
import Svg from './svg.js';
import Poem from '../containers/poemContainer.js';

class Main extends Component {
  render() {
    return (
      <div>
        <Checkboxes/>
        <Menu />

        <div className="main">
              <div className="left">
                  <Svg />
              </div>
              <div className="right">
                  <Poem poem="abstrakt"/>

                  //TODO: Add file sound
                  <div id="lyd">
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Main;
