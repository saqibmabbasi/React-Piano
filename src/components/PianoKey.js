import React from 'react';

export default class PianoKey extends React.Component {

    //audioFile: string="";

    constructor(props) {
        super(props);
        // this.state = { };

        this.handleClick = this.handleClick.bind(this);
        // this.handleKeyDown = this.handleKeyDown.bind(this);
        
        // const noteAudio = document.getElementById(this.props.note)
        // const pianokey = document.getElementById("Key-".concat(this.props.note))
        // console.log('playNote ', this.props.note, noteAudio, pianokey);
    }



    handleClick(event) {
        const noteAudio = document.getElementById(this.props.note)
        const pianokey = document.getElementById("Key-".concat(this.props.note))
        console.log('playNote ', this.props.note, noteAudio, pianokey);

        this.playNote(noteAudio,pianokey);
    }


    handleKeyDown(event) {
        console.log("handle Keydown", event /*, this.props.keystroke*/);

        // const noteAudio = document.getElementById(this.props.note)
        // const pianokey = document.getElementById("Key-".concat(this.props.note))
        // console.log('playNote ', this.props.note, noteAudio, pianokey);

        // this.playNote(noteAudio,pianokey);
    }



    playNote(noteAudio,pianokey) {
        // console.log(this.props.note);
        noteAudio.currentTime = 0
        noteAudio.play()
        pianokey.classList.add('active')
        noteAudio.addEventListener('ended', () => {
            pianokey.classList.remove('active')
        })
    
    }



    render() {
        return (
            <div id={this.props.id} 
                data-note={this.props.note} 
                className={this.props.className} 
                onClick={this.handleClick}
                keystroke={this.props.keystroke}
                onKeyDown={this.handleKeyDown}
                tabIndex="0"
                >
                <audio id={this.props.note} src={this.props.playFile}></audio>
            </div>
        );
    }
}
