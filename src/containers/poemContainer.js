import React, { Component } from 'react';
import Poem from '../components/poem.js';

class PoemContainer  extends Component {
  constructor(props) {
     super(props);
     this.state = {
       error: null,
       isLoaded: false,
       tekst: [],
       abstract: [],
       city: [],
       landscape: [],
       poem: this.props.poem
     };
   }

   componentDidMount() {
     console.log("poemContainer " + this.state.poem )
     fetch("/dikt/" + this.state.poem + ".json")
       .then(res => res.json())
       .then(
         (result) => {
           console.log(result.Tekst)
           this.setState({
             isLoaded: true,
             tekst: result.Tekst
           });
           console.log(this.state.tekst)
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
     }
     else if(this.props.nr == -1){
       return <div></div>
     }

     else {
       return (
         <div>
            <Poem poem={this.props.poem} nr={this.props.nr} tekst={this.state.tekst}/>
         </div>
       );
     }
   }

}
  export default PoemContainer;
