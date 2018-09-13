import React, { Component } from 'react';
import '../stylesheets/App.css';

class Main extends Component {
  render() {
    return (
      <div>
      <div id="faner">
          <button className="btn" autofocus="1">Fane 1</button>
          <button className="btn">Fane 2</button>
          <button className="btn">Fane 3</button>
          <button className="btn">Fane 4</button>
      </div>
      </div>
    );
  }
}

export default Main;
