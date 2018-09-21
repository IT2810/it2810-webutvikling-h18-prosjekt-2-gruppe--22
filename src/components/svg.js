import React, { Component } from 'react';
import SvgLoader from '../containers/svgLoader.js';

var source = [
  {
    items: [
      {
      type: 'abstract',
      buttons: [
          {
            id: 0,
            value: 'https://www.svgbackgrounds.com/#dragon-scales',
            title: "Dragon scales",
            from: 'https://www.svgbackgrounds.com/',
            name: "svgbackgrounds"

          }, {
            id: 1,
            value: 'https://www.svgbackgrounds.com/#tortoise-shell',
            title: "Tortoise shell",
            from: 'https://www.svgbackgrounds.com/',
            name: "svgbackgrounds",
          },
          {
            id: 2,
            value: 'https://www.svgbackgrounds.com/#radiant-gradient',
            title: "Radiant Gradient",
            from: 'https://www.svgbackgrounds.com/',
            name: "svgbackgrounds",
          },
          {
            id: 3,
            value: 'https://www.svgbackgrounds.com/#subtle-prism',
            title: "Subtle Prism",
            from: 'https://www.svgbackgrounds.com/',
            name: "svgbackgrounds",
          }
      ]
  },
  {
      type: 'city',
      buttons: [
          {
            id: 0,
            value: 'https://www.flaticon.com/free-icon/cityscape_189060#term=city&page=1&position=5',
            title: "Roundicons",
            from: 'https://www.flaticon.com/authors/roundicons',
            name: "Flaticon",
          }, {
            id: 1,
            value: 'https://www.flaticon.com/free-icon/city-towers-view_46270',
            title: "City night",
            from: 'https://www.flaticon.com/',
            name: "Flaticon",
          },
          {
            id: 2,
            value: 'https://www.flaticon.com/free-icon/city-towers-view_46270',
            title: "city tower",
            from: 'http://www.freepik.com',
            name: "Freepik",
         },
         {
           id: 3,
           value: 'https://www.flaticon.com/free-icon/cityscape_327985',
           title: "Cityscape",
           from: 'https://www.flaticon.com/authors/zlatko-najdenovski',
           name: "Zlatko Najdenovski",
        }
      ]
  },
  {
      type: 'landscape',
      buttons: [
          {
              id: 0,
              value: 'https://www.vexels.com/vectors/preview/144685/field-landscape-with-horse-illustration',
              title: "Field landcape with horse illustration",
              from: 'https://www.vexels.com/',
              name: "Vexels"

          }, {
              id: 1,
              value: 'https://www.vexels.com/vectors/preview/145256/winter-snow-landscape-illustration',
              title: "Winter snow landscape illustration",
              from: 'https://www.vexels.com/',
              name: "Vexels"
          },
          {
              id: 2,
              value: "https://www.vexels.com/vectors/preview/144755/winter-mountain-landscape-illustration",
              title: "Winter mountain landscape illustration",
              from: 'https://www.vexels.com/',
              name: "Vexels",
          },
          {
              id: 3,
              value: "https://www.vexels.com/vectors/preview/144655/flat-hiking-landscape-illustration",
              title: "Flat hiking landscape illustration",
              from: "https://www.vexels.com/",
              name: "Vexels",
          }
      ]
  }
]
}
];



let tabNr = -1
class Svg extends Component {



  render() {
  if(this.props.nr == -1){
    return <div></div>
  }

  if(this.props.svg == 'abstract'){
    tabNr = 0
  }

  else if(this.props.svg == 'city'){
    tabNr = 1
  }

  else if(this.props.svg == 'landscape'){
    tabNr = 2
  }

    return (
      <div>
          <SvgLoader nr={this.props.nr} category={this.props.svg} src={`/svg/${this.props.svg}`} className="svg"/>
          {source.map((svg,i) => {
                let source = svg.items[tabNr].buttons[this.props.nr].value
                let from =  svg.items[tabNr].buttons[this.props.nr].from
                let name =  svg.items[tabNr].buttons[this.props.nr].name
                  return <div><a target="_blank" href={source}>{svg.items[tabNr].buttons[this.props.nr].title}</a> | Free vector by <a target="_blank" href={from}>{name}</a>
              </div>
            })}
      </div>
    );

}
}

export default Svg;
