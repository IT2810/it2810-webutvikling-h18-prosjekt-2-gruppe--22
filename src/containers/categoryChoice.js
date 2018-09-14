import React, { Component } from 'react';
import Poem from '../components/poem.js';
import Svg from '../components/svg.js'

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
            <input type="radio" value="abstract" name="poem" checked={poem == "abstract"} onChange={this.setPoem}/> abstract
            <input type="radio" value="city" name="poem" checked={poem == "city"} onChange={this.setPoem}/> city
            <input type="radio" value="landscape" name="poem" checked={poem == "landscape"} onChange={this.setPoem}/> landscape
            <input type="radio" value="abstract" name="city" checked={svg == "abstract"} onChange={this.setSvg}/> abstract
            <input type="radio" value="city" name="city" checked={svg == "city"} onChange={this.setSvg}/> city
            <input type="radio" value="landscape" name="city" checked={svg == "landscape"} onChange={this.setSvg}/> landscape
            <button className="btn btn-default" type="submit">Save</button>
          </form>
      )
   }
  };
  export default CategoryChoice;
