import React, { Component } from 'react';
//import Sound from 'react-sound';

class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //sound: this.props.sound,
            selectedTab: 1,
            play: false,
            loop: true,
        };

        this.chooseSound = (tab) => this.setState({selectedTab: tab});

        this.playAudio = () => {
            switch(this.state.selectedTab){
                /* Abstract */
                case "abstract1":
                    this.abstract1.togglePlay();
                    break;
                case "abstract2":
                    this.abstract2.togglePlay();
                    break;
                case "abstract3":
                    this.abstract3.togglePlay();
                    break;
                case "abstract4":
                    this.abstract4.togglePlay();
                    break;

                /* City */
                case "city1":
                    this.city1.togglePlay();
                    break;
                case "city2":
                    this.city2.togglePlay();
                    break;
                case "city3":
                    this.city3.togglePlay();
                    break;
                case "city4":
                    this.city4.togglePlay();
                    break;

                /* Village */
                case "village1":
                    this.village1.togglePlay();
                    break;
                case "village2":
                    this.village2.togglePlay();
                    break;
                case "village3":
                    this.village3.togglePlay();
                    break;
                case "village4":
                    this.village4.togglePlay();
                    break;

                default:
                    break;
            }
        }
    }

    play() {
        this.setState({
            play: true,
            pause: false
        });
        this.audio.play();
    }

    pause() {
        this.setState({
            play: false,
            pause: true
        });
        this.audio.pause();
    }

    togglePlay() {
        this.setState({
            play: !this.state.play
        });
        this.state.play ? this.audio.play() : this.audio.pause();
    } 

    componentDidMount() { 
      
    }

render() {
// fetch("/lyder/" + this.state.sound + ".json")

    return (

    <div className="stage">
        <div className="abstract">
            <audio ref={(abstract1) => { this.abstract1 = abstract1; }}>
                <source src="../public/lyder/abstrakt1.mp3" type="audio/mpeg" >
                </source>
            </audio>
            <audio ref={(abstract2) => { this.abstract2 = abstract2; }}>
                <source src="../public/lyder/abstrakt2.mp3"type="audio/mpeg" >
                </source>
            </audio>
            <audio ref={(abstract3) => { this.abstract3 = abstract3; }}>
                <source src="../public/lyder/abstrakt3.mp3" type="audio/mpeg" >
                </source>
            </audio>
            <audio ref={(abstract4) => { this.abstract4 = abstract4; }}>
                <source src="../public/lyder/abstrakt4.mp3" type="audio/mpeg" >
                </source>
            </audio>
		</div>

        <div className="city">
            <audio ref={(city1) => { this.city1 = city1; }}>
                <source src="../public/lyder/by1.mp3" type="audio/mpeg" >
                </source>
            </audio>
            <audio ref={(city2) => { this.city2 = city2; }}>
                <source src="../public/lyder/by2.mp3"type="audio/mpeg" >
                </source>
            </audio>
            <audio ref={(city3) => { this.city3 = city3; }}>
                <source src="../public/lyder/by3.mp3" type="audio/mpeg" >
                </source>
            </audio>
            <audio ref={(city4) => { this.city4 = city4; }}>
                <source src="../public/lyder/by4.mp3" type="audio/mpeg" >
                </source>
            </audio>
		</div>


        <div className="village">
            <audio ref={(village1) => { this.village1 = village1; }}>
                <source src="../public/lyder/landskap1.mp3" type="audio/mpeg" >
                </source>
            </audio>
            <audio ref={(village2) => { this.village2 = village2; }}>
                <source src="../public/lyder/landskap2.mp3"type="audio/mpeg" >
                </source>
            </audio>
            <audio ref={(village3) => { this.village3 = village3; }}>
                <source src="../public/lyder/landskap3.mp3" type="audio/mpeg" >
                </source>
            </audio>
            <audio ref={(village4) => { this.village4 = village4; }}>
                <source src="../public/lyder/landskap4.mp3" type="audio/mpeg" >
                </source>
            </audio>
		</div>


			<button className="btn btn-info" onClick={this.playAudio}>Play/pause audio</button>
    </div>

/* <RadioButtons selectedColor={this.state.selectedColor} chooseSound={this.chooseSound}/>
 */


    );

}
}


export default Audio;
