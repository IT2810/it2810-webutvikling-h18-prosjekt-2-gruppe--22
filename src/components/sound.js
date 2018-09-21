import React, { Component } from 'react';

class Audio extends Component {


render() {
    return (
    <div className="stage">
        <audio autoPlay ref="audio_tag" src={`/lyder/${this.props.audio + this.props.nr}.mp3`}  controls/>
    </div>
    );

}
}

export default Audio;
