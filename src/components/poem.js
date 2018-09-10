import React, { Component } from 'react';
import axios from 'axios'

class Poem  extends Component {
  constructor(props) {
     super(props);
     this.state = {
       error: null,
       isLoaded: false,
       tekst: [],
       poem: this.props.poem
     };
   }

   componentDidMount() {
     fetch("/dikt/" + this.state.poem + ".json")
       .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             isLoaded: true,
             tekst: result.Tekst
           });
         },
         // Note: it's important to handle errors here
         // instead of a catch() block so that we don't swallow
         // exceptions from actual bugs in components.
         (error) => {
           this.setState({
             isLoaded: true,
             error
           });
         }
       )
   }

   render() {
     const { error, isLoaded, tekst } = this.state;
     if (error) {
       return <div>Error: {error.message}</div>;
     } else if (!isLoaded) {
       return <div>Loading...</div>;
     } else {
       return (
         <ul>
           {tekst.map(tekst => (
             <li key={tekst.Tittel}>
               Tittel: {tekst.Tittel} Forfatter: {tekst.Forfatter}
             </li>
           ))}
         </ul>
       );
     }
   }

}
  export default Poem;
