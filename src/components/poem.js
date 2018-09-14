import React, { Component } from 'react';

class Poem  extends Component {


   render() {
       return (
             <div id="tekst">
                 <ul>
                   {this.props.tekst.map(tekst => (
                     <li key={tekst.Tittel}>
                       Tittel: {tekst.Tittel} Forfatter: {tekst.Forfatter}
                     </li>
                   ))}
                 </ul>
             </div>
       );
     }
}
  export default Poem;
