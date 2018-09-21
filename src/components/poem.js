import React, { Component } from 'react';

class Poem  extends Component {

   render() {
       return (
         <ul>
           {this.props.tekst.map((tekst,index) => {
             if(this.props.nr == index)
               return <p id="poem" key={tekst.Tittel}>
                 <b>{tekst.Tittel}</b> <br />
                 <i id="forfatter">{tekst.Forfatter}</i> <br /> <br />

                 {tekst.Dikt[0]} <br />
                 {tekst.Dikt[1]} <br />
                 {tekst.Dikt[2]} <br />
                 {tekst.Dikt[3]} <br />
                 {tekst.Dikt[4]} <br />
                 {tekst.Dikt[5]}

               </p>
           }
           )}
         </ul>
       );
     }


}
  export default Poem;
