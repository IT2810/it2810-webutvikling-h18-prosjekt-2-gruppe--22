import React, { Component } from 'react';
import SvgLoader from '../containers/svgLoader.js';

class Svg extends Component {

  componentDidUpdate(prevProps) {
// Typical usage (don't forget to compare props):
if (this.props.nr !== prevProps.nr) {
  console.log("change")

    //this.componentDidMount()
      //this.fetchData(this.props.userID);
}
}

  render() {

console.log(this.props.nr)
console.log("svg " + this.props.svg)
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
