import React from 'react';

export default class PianoKey extends React.Component {

    //audioFile: string="";

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }



    handleClick(event) {
        const noteAudio = document.getElementById(this.props.note)
        const pianokey = document.getElementById("Key-".concat(this.props.note))
        this.playNote(noteAudio,pianokey);
    }


    handleKeyDown(event) {
        let note='';
        switch(event.key) {
            case 'z':
            case 'Z':
                note = 'C';
                break;
            case 'x':
            case 'X':
                note = 'D';
                break;
            case 'c':
            case 'C':
                note = 'E';
                break;
            case 'v':
            case 'V':
                note = 'F';
                break;
            case 'b':
            case 'B':
                note = 'G';
                break;
            case 'n':
            case 'N':
                note = 'A';
                break;
            case 'm':
            case 'M':
                note = 'B';
                break;
            case 's':
            case 'S':
                note = 'Db';
                break;
            case 'd':
            case 'D':
                note = 'Eb';
                break;
            case 'g':
            case 'G':
                note = 'Gb';
                break;
            case 'h':
            case 'H':
                note = 'Ab';
                break;
            case 'j':
            case 'J':
                note = 'Bb';
                break;
            default:
                // code block
        }

        if (note !== '') {
            const noteAudio = document.getElementById(note)
            const pianokey = document.getElementById("Key-".concat(note))
            this.playNote(noteAudio,pianokey);
        }
    }



    playNote(noteAudio,pianokey) {
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
