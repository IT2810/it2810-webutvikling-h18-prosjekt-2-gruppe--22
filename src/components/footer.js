import React, { Component } from 'react';


class Footer extends Component {

  render() {
    //filepath should be: {`/svg/${this.state.svgfile}.svg`}
    return (
      <footer className="footer">
          <p>IT2810 - Webutvikling - Høst 2018</p>
      </footer>
    );
  }
}

export default Footer;
