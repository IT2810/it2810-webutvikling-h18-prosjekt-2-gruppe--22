import React, { Component } from 'react';
import Poem from './poem.js';

class CategoryChoice  extends Component {

  constructor(params) {
    super(params)
    // initial gender state set from props
    this.state = {
      poem: '',
      redirectToNewPage: false
    }
    this.setPoem = this.setPoem.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
 }

 setPoem(e) {
   this.setState({
     poem: e.target.value,
   })
   console.log(e.target.value)
 }

    handleFormSubmit(formSubmitEvent) {
      formSubmitEvent.preventDefault();
      this.setState({
        redirectToNewPage: true
      })
      console.log('You have selected:', this.state.poem);
    }

    render(){
      const {poem} = this.state
      if (this.state.redirectToNewPage) {
          return (
            <div>
                <Poem />
            </div>
          )
        }
        return (
          <form onSubmit={this.handleFormSubmit}>
            <input type="radio" value="abstrakt" name="poem" checked={poem == "abstrakt"} onChange={this.setPoem}/> Abstrakt
            <input type="radio" value="by" name="poem" checked={poem == "by"} onChange={this.setPoem}/> By
            <input type="radio" value="landskap" name="poem" checked={poem == "landskap"} onChange={this.setPoem}/> Landskap
            <button className="btn btn-default" type="submit">Save</button>
          </form>
      )
   }
  };
  export default CategoryChoice;
