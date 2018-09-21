import React, { Component } from 'react';
import Pages from '../containers/pages.js';

class Checkboxes extends Component {

  constructor(params) {
    super(params)
    // initial gender state set from props
    this.state = {
      poem: '',
      svg: '',
      sound: '',
    }
    this.setPoem = this.setPoem.bind(this)
    this.setSvg = this.setSvg.bind(this)
    this.setSound = this.setSound.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)

 }

setPoem(e) {
    this.setState({
        poem: e.target.value,
    })
    console.log("kkk" + e.target.value)
}

setSvg(e){
    this.setState({
        svg: e.target.value,
    })
    console.log("Svg" + e.target.value)
}

setSound(e) {
    this.setState({
        sound: e.target.value,
    })
    console.log("Sound" + e.target.value)
}

handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    console.log('You have selected:', this.state.poem);
}


  render() {
    //filepath should be: {`/svg/${this.state.svgfile}.svg`}

    return (
      <div>
      <div>
      <div id="collapsible-wrapper">

          <input id="collapsible" class="toggle" type="checkbox" />
          <label for="collapsible" class="lbl-toggle">Velg kategori</label>

      <div className="kategori" id="collapsible-content">

          <div id="1" class="content-inner">
              <h3 className="choiceName">Bilde</h3>
              <form className="radioButtons">
                  <input type="radio" name="svg" value="abstract" checked={this.state.svg == "abstract"} onChange={this.setSvg}/> Abstrakt <br/>
                  <input type="radio" name="svg" value="city" checked={this.state.svg == "city"} onChange={this.setSvg}/> By <br/>
                  <input type="radio" name="svg" value="landscape" checked={this.state.svg == "landscape"} onChange={this.setSvg}/> Landskap <br/>
              </form>
          </div>

          <div id="2" class="content-inner">
              <h3 className="choiceName">Tekst</h3>
              <form className="radioButtons">
                  <input type="radio" name="poem" value="abstract" checked={this.state.poem == "abstract"} onChange={this.setPoem}/> Abstrakt <br/>
                  <input type="radio" name="poem" value="city" checked={this.state.poem == "city"} onChange={this.setPoem}/> By <br/>
                  <input type="radio" name="poem" value="landscape" checked={this.state.poem == "landscape"} onChange={this.setPoem}/> Landskap <br/>
              </form>
          </div>

          <div id="3" class="content-inner">
              <h3 className="choiceName">Lyd</h3>
              <form className="radioButtons">
                  <input type="radio" name="sound" value="abstract" checked={this.state.sound == "abstract"} onChange={this.setSound}/> Abstrakt <br/>
                  <input type="radio" name="sound" value="city" checked={this.state.sound == "city"} onChange={this.setSound}/> By <br/>
                  <input type="radio" name="sound" value="landscape" checked={this.state.sound == "landscape"} onChange={this.setSound}/> Landskap <br/>
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
