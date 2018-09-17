import React, { Component } from 'react';

class Checkboxes extends Component {

  render() {
    //filepath should be: {`/svg/${this.state.svgfile}.svg`}
    return (
      <div>
      <div id="collapsible-wrapper">

          <input id="collapsible" class="toggle" type="checkbox" />
          <label for="collapsible" class="lbl-toggle">Velg kategori</label>

      <div className="kategori" id="collapsible-content">

          <div id="1" class="content-inner">
              <h3>Bilde</h3>
              <form>
                  <input type="radio" name="bilde" value="abstract"/> Abstrakt <br/>
                  <input type="radio" name="bilde" value="city"/> By <br/>
                  <input type="radio" name="bilde" value="landscape"/> Landskap <br/>
              </form>
          </div>

          <div id="2" class="content-inner">
              <h3>Tekst</h3>
              <form action="">
                  <input type="radio" name="tekst" value="abstract"/> Abstrakt <br/>
                  <input type="radio" name="tekst" value="city"/> By <br/>
                  <input type="radio" name="tekst" value="landscape"/> Landskap <br/>
              </form>
          </div>

          <div id="3" class="content-inner">
              <h3>Lyd</h3>
              <form action="">
                  <input type="radio" name="lyd" value="abstract"/> Abstrakt <br/>
                  <input type="radio" name="lyd" value="city"/> By <br/>
                  <input type="radio" name="lyd" value="landscape"/> Landskap <br/>
              </form>
          </div>

      </div>
      </div>
      </div>
    );
  }
}

export default Checkboxes;
