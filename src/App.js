import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <header className="App-header">
              <h1 className="App-title">Utstillingstittel</h1>
          </header>

          <div className="kategori">
              <div id="1">
                  <p>Bilde</p>
              </div>

              <div id="2">
                  <p>Tekst</p>
              </div>

              <div id="3">
                  <p>Lyd</p>
              </div>
          </div>

          <div id="faner">
              <button className="btn" autofocus="1">Fane 1</button>
              <button className="btn">Fane 2</button>
              <button className="btn">Fane 3</button>
              <button className="btn">Fane 4</button>
          </div>

          <div className="main">
              <div className="left">
                  <div id="bilde">

                  </div>
              </div>

              <div className="right">
                  <div id="tekst">

                  </div>

                  <div id="lyd">

                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default App;
