import React, { Component } from 'react';
import Checkboxes from './checkboxes.js'
import Pages from '../containers/pages.js';
import Svg from './svg.js';
import Poem from '../containers/poemContainer.js';


class Main extends Component {

  render() {
    return (
      <div>
          <Checkboxes />
        </div>
    );
  }
}

export default Main;
