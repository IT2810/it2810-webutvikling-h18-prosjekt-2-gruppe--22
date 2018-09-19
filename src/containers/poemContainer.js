import React, { Component } from 'react';
import Poem from '../components/poem.js';

class PoemContainer  extends Component {
  constructor(props) {
     super(props);
     this.state = {
       error: null,
       tekst: []
     };
   }

   componentDidUpdate(prevProps){
     if(this.props.poem !== prevProps.poem){
       this.componentDidMount();
     }
   }

   componentDidMount() {
     fetch("/dikt/" + this.props.poem + ".json")

       .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             tekst: result.Tekst
           });
           console.log(this.props.poem)
         },
         // Note: it's important to handle errors here
         // instead of a catch() block so that we don't swallow
         // exceptions from actual bugs in components.
         (error) => {
           this.setState({
             error
           });
         }
       )
   }



   render() {
     const { error, isLoaded, tekst } = this.state;
     if (error) {
       return <div>Error: {error.message}</div>;
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
