import React, { Component } from 'react';
//import Sound from 'react-sound';

class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //sound: this.props.sound,
            selectedTab: 1,
            play: true,
            loop: true,
            type: 'abstrakt'
        };

        this.chooseSound = (tab) => this.setState({selectedTab: tab});

}



render() {
// fetch("/lyder/" + this.state.sound + ".json")

    return (
    <div className="stage">
        <audio ref="audio_tag" src={`/lyder/${this.state.type + this.props.nr}.mp3`}  controls/>
    </div>
    );

}
}


export default Audio;
