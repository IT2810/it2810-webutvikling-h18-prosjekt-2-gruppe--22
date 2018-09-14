import React, { Component } from 'react';


class Header extends Component {

  render() {
    //filepath should be: {`/svg/${this.state.svgfile}.svg`}
    return (
      <div>
          <header className="App-header">
              <h1 className="App-title">Utstillingstittel</h1>
          </header>
        </div>
    );
  }
}

export default Header;
