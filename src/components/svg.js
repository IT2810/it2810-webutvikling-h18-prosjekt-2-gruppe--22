import React, { Component } from 'react';
import SvgLoader from '../containers/svgLoader.js';

class Svg extends Component {



  render() {

console.log(this.props.nr)
  if(this.props.nr == -1){

    return <div></div>
  }
  else{
    return (
      <div>
          <SvgLoader src={`/svg/${this.props.svg + this.props.nr}.svg`} className="svg"/>
        </div>
    );
  }}
}

export default Svg;
