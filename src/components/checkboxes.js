import React, { Component } from 'react';


class Checkboxes extends Component {

  render() {
    //filepath should be: {`/svg/${this.state.svgfile}.svg`}
    return (
      <div>
      <div className="kategori">
          <div id="1">
              <p>Bilde</p>
          </div>

          <div id="2">
              <p>Tekst</p>
          </div>

          <div id="3">
              <p>Lyd</p>
          </div>
      </div>
        </div>
    );
  }
}

export default Checkboxes;
