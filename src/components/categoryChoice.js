import React, { Component } from 'react';
import Poem from './poem.js';
import Svg from './svg.js'

class CategoryChoice  extends Component {

  constructor(params) {
    super(params)
    // initial gender state set from props
    this.state = {
      poem: '',
      svg: '',
      redirectToNewPage: false
    }
    this.setPoem = this.setPoem.bind(this)
    this.setSvg = this.setSvg.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
 }

 setPoem(e) {
   this.setState({
     poem: e.target.value,
   })
   console.log(e.target.value)
 }

 setSvg(e){
  this.setState({
    svg: e.target.value,
  })
  console.log("Svg" + e.target.value)
}

    handleFormSubmit(formSubmitEvent) {
      formSubmitEvent.preventDefault();
      this.setState({
        redirectToNewPage: true
      })
      console.log('You have selected:', this.state.poem);
    }

    render(){
      const {poem, svg} = this.state
      if (this.state.redirectToNewPage) {
          return (
            <div>
                <Svg svg={this.state.svg}/>
            </div>
          )
        }
        return (
          <form onSubmit={this.handleFormSubmit}>
            <input type="radio" value="abstrakt" name="poem" checked={poem == "abstrakt"} onChange={this.setPoem}/> Abstrakt
            <input type="radio" value="by" name="poem" checked={poem == "by"} onChange={this.setPoem}/> By
            <input type="radio" value="landskap" name="poem" checked={poem == "landskap"} onChange={this.setPoem}/> Landskap
            <input type="radio" value="abstrakt" name="poem" checked={svg == "abstrakt"} onChange={this.setSvg}/> Abstrakt
            <input type="radio" value="by" name="poem" checked={svg == "by"} onChange={this.setSvg}/> By
            <input type="radio" value="landskap" name="poem" checked={svg == "landskap"} onChange={this.setSvg}/> Landskap
            <button className="btn btn-default" type="submit">Save</button>
          </form>
      )
   }
  };
  export default CategoryChoice;
