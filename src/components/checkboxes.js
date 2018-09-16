import React, { Component } from 'react';

class Checkboxes extends Component {

    constructor() {
        super();
        this.state = {
            svg: '',
            text: '',
            sound: ''
        }
    }

    onClick(){
        console.log("hei");
    }


  render() {
    //filepath should be: {`/svg/${this.state.svgfile}.svg`}
    return (
      <div>
      <div className="kategori">
          <div id="1">
              <h3>Bilde</h3>
              <form>
                  <input type="radio" name="bilde" value="abstract"/> Abstrakt <br/>
                  <input type="radio" name="bilde" value="city"/> By <br/>
                  <input type="radio" name="bilde" value="landscape"/> Landskap <br/>
              </form>
          </div>

          <div id="2">
              <h3>Tekst</h3>
              <form action="">
                  <input type="radio" name="tekst" value="abstract"/> Abstrakt <br/>
                  <input type="radio" name="tekst" value="city"/> By <br/>
                  <input type="radio" name="tekst" value="landscape"/> Landskap <br/>
              </form>
          </div>

          <div id="3">
              <h3>Lyd</h3>
              <form action="">
                  <input type="radio" name="lyd" value="abstract"/> Abstrakt <br/>
                  <input type="radio" name="lyd" value="city"/> By <br/>
                  <input type="radio" name="lyd" value="landscape"/> Landskap <br/>
              </form>
          </div>
      </div>
        </div>
    );
  }
}

export default Checkboxes;
