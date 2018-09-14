import React, { Component } from 'react';

class Poem  extends Component {


   render() {

       return (
         <ul>
           {this.props.tekst.map(tekst => (
             <li key={tekst.Tittel}>
               Tittel: {tekst.Tittel} Forfatter: {tekst.Forfatter}
             </li>
           ))}
         </ul>
       );
     }


}
  export default Poem;
