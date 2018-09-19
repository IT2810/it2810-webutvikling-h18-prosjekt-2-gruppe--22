import React, { Component } from 'react';
import SvgLoader from '../containers/svgLoader.js';

class Svg extends Component {



  render() {

  if(this.props.nr == -1){

    return <div></div>
  }
  else{
    console.log("svg " + this.props.svg)
    return (
      <div>
          <SvgLoader nr={this.props.nr} category={this.props.svg} src={`/svg/${this.props.svg}`} className="svg"/>
        </div>
    );
  }}
}

export default Svg;
