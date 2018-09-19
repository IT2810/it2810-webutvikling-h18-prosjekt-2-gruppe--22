import React, { Component } from 'react';

class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sound: this.props.sound,
            play: true,
            loop: true,
        };
}

render() {
    return (
    <div className="stage">
        <audio ref="audio_tag" src={`/lyder/${this.props.audio + this.props.nr}.mp3`}  controls/>
    </div>
    );

}
}

export default Audio;
