import React, { Component } from 'react';

class Poem  extends Component {

  
   render() {
     let f = 1
       return (
         <ul>
           {this.props.tekst.map((tekst,index) => {
             if(this.props.nr == index)
                 return <li key={tekst.Tittel}>
                   {index} Tittel: {tekst.Tittel} Forfatter: {tekst.Forfatter}
                 </li>
           }
           )}
         </ul>
       );
     }


}
  export default Poem;
