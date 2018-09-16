import React, { Component } from 'react';

import Svg from '../components/svg.js';
import PoemContainer from './poemContainer.js';

const TabsArray = [{"name":"Fane 1"},{"name":"Fane 2"},{"name":"Fane 3"},{"name":"Fane 4"}];


class Pages extends Component {

  constructor(props) {
     super(props);
     this.state = {
       nr : -1
     };
     this.handleButtonClick = this.handleButtonClick.bind(this);
   }

   handleButtonClick(e){
     const {id} = e.target;
     console.log(id)
     this.setState({
       nr: id
     });
   }




  render() {
    if (this.state.id == -1) {
      return <div></div>;
    }
    return (
      <div>
          <div id="faner">
          {TabsArray.map((tab, index) =>
            <button key={index} id={index} onClick={this.handleButtonClick} className="btn">{tab.name}</button>
          )}
        </div>
        <div className="main">
            <div className="left">
                <Svg />
            </div>

            <div className="right">
                <PoemContainer nr={this.state.nr} poem="abstrakt"/>

                //TODO Add sound here
                <div id="lyd">

                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Pages;
