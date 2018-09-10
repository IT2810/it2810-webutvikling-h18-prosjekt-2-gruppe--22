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

          <div className="faner">
              <div id="f1">
                  <button className="knapp aktiv">Fane 1</button>
              </div>

              <div id="f2">
                  <button className="knapp">Fane 2</button>
              </div>

              <div id="f3">
                  <button className="knapp">Fane 3</button>
              </div>

              <div id="f4">
                  <button className="knapp">Fane 4</button>
              </div>
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
