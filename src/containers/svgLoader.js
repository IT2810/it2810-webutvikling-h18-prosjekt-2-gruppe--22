import React, { Component } from 'react';


class SvgLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nr0: '',
            nr1: '',
            nr2: '',
            nr3: '',
            width: 24,
            height: 24,
            viewBox : '0 0 24 24'

        };
    }

    //Got some inspiration from this library:
    componentDidMount() {
        for(let i = 0; i < 4; i++){
            let request = new XMLHttpRequest();
            request.open("GET", [this.props.src + i + ".svg"]);
            request.setRequestHeader("Content-Type", "image/svg+xml");
            let that = this;
            request.addEventListener("load", function(event) {
                let response = event.target.responseText;
                let doc = new DOMParser();
                let xml = doc.parseFromString(response, "image/svg+xml");
                if (xml.firstChild.nodeName !== 'svg') {
                  console.error(that.props.src + ' is not a valid svg file.');
                  return false;
                }
                let viewBox = xml.firstChild.getAttribute('viewBox');
                viewBox = viewBox ? viewBox.split(' ') : '';
                let width = xml.firstChild.getAttribute('width') || viewBox[2] || 24;
                let height = xml.firstChild.getAttribute('height') || viewBox[3] || 24;
                viewBox = viewBox ? viewBox.join(' ') : ('0 0 ' + width + ' ' + height).replace(/px/g, '');
                let key = "nr" + i
                that.setState({
                  ["nr" + i]: xml.firstChild.innerHTML,
                  width, height, viewBox
                })
            })

            request.send();
          }
    }

  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.category !== prevProps.category) {
      this.componentDidMount()
        //this.fetchData(this.props.userID);
  }
}

    render() {
        return React.createElement(
            'svg',
            {
                className: this.props.className,
                viewBox: this.state.viewBox,
                width: this.state.width,
                height: this.state.height,
                dangerouslySetInnerHTML: {__html: this.state["nr" + this.props.nr]}
            }
        );
    }
}

export default SvgLoader;
