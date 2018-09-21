import React, { Component } from 'react';
import Pages from '../containers/pages.js';

class Checkboxes extends Component {

  constructor(params) {
    super(params)
    this.state = {
      poem: '',
      svg: '',
      sound: '',
    }
    this.setPoem = this.setPoem.bind(this)
    this.setSvg = this.setSvg.bind(this)
    this.setSound = this.setSound.bind(this)
 }

setPoem(e) {
    this.setState({
        poem: e.target.value,
    })

}

setSvg(e){
    this.setState({
        svg: e.target.value,
    })
}

setSound(e) {
    this.setState({
        sound: e.target.value,
    })
}



  render() {
    return (
      <div>
      <div>
      <div id="collapsible-wrapper">

          <input id="collapsible" className="toggle" type="checkbox" />
          <label htmlFor="collapsible" className="lbl-toggle">Velg kategori</label>

      <div className="kategori" id="collapsible-content">

          <div id="1" className="content-inner">
              <h3 className="choiceName">Bilde</h3>
              <form className="radioButtons">
                  <input type="radio" name="svg" value="abstract" checked={this.state.svg === "abstract"} onChange={this.setSvg}/> Abstrakt <br/>
                  <input type="radio" name="svg" value="city" checked={this.state.svg === "city"} onChange={this.setSvg}/> By <br/>
                  <input type="radio" name="svg" value="landscape" checked={this.state.svg === "landscape"} onChange={this.setSvg}/> Landskap <br/>
              </form>
          </div>

          <div id="2" className="content-inner">
              <h3 className="choiceName">Tekst</h3>
              <form className="radioButtons">
                  <input type="radio" name="poem" value="abstract" checked={this.state.poem === "abstract"} onChange={this.setPoem}/> Abstrakt <br/>
                  <input type="radio" name="poem" value="city" checked={this.state.poem === "city"} onChange={this.setPoem}/> By <br/>
                  <input type="radio" name="poem" value="landscape" checked={this.state.poem === "landscape"} onChange={this.setPoem}/> Landskap <br/>
              </form>
          </div>

          <div id="3" className="content-inner">
              <h3 className="choiceName">Lyd</h3>
              <form className="radioButtons">
                  <input type="radio" name="sound" value="abstract" checked={this.state.sound === "abstract"} onChange={this.setSound}/> Abstrakt <br/>
                  <input type="radio" name="sound" value="city" checked={this.state.sound === "city"} onChange={this.setSound}/> By <br/>
                  <input type="radio" name="sound" value="landscape" checked={this.state.sound === "landscape"} onChange={this.setSound}/> Landskap <br/>
              </form>
          </div>

      </div>
      </div>
      </div>
      <Pages svg={this.state.svg} poem={this.state.poem} sound={this.state.sound}/>
      </div>
    );
  }
}

export default Checkboxes;
