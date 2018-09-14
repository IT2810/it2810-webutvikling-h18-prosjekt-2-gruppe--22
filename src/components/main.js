import React, { Component } from 'react';
import Checkboxes from './checkboxes.js'
import Pages from './pages.js';
import Svg from './svg.js';
import Poem from './poem.js';

class Main extends Component {

  render() {
    //filepath should be: {`/svg/${this.state.svgfile}.svg`}
    return (
      <div>
          <Checkboxes />
          <Pages />
          <div className="main">
              <div className="left">
                  <Svg />
              </div>

              <div className="right">
                  <Poem />
                  
                  //// TODO: Add sound here
                  <div id="lyd">

                  </div>
              </div>
          </div>

        </div>
    );
  }
}

export default Main;
