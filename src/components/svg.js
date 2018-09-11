import React, { Component } from 'react';
import SvgLoader from 'bv-react-svgloader';

class Svg extends Component {
  constructor(props) {
      super(props);
      this.state = {
          svgfile: this.props.svg
      };
  }
  
  render() {
    //filepath should be: {`/svg/${this.state.svgfile}.svg`}
    return (
      <div>
          <SvgLoader src={`/svg/logo.svg`} className="svg"/>
      </div>
    );
  }
}

export default Svg;
