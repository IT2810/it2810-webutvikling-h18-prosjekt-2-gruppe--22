import React, { Component } from 'react';
import Checkboxes from './checkboxes.js'
import Pages from './pages.js';
import Svg from './svg.js';
import Poem from '../containers/poemContainer.js';


class Main extends Component {

  render() {
    return (
      <div>
          <Checkboxes />
          <Pages />
          <div className="main">
              <div className="left">
                  <Svg />
              </div>

              <div className="right">
                  <Poem poem="abstrakt"/>

                  //TODO Add sound here
                  <div id="lyd">

                  </div>
              </div>
          </div>

        </div>
    );
  }
}

export default Main;
