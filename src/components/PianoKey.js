import React from 'react';

export default class PianoKey extends React.Component {

    //audioFile: string="";

    constructor(props) {
       super(props);
        // this.state = { };

        //this.audioFile

        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }



    handleClick(event) {
        this.playNote();
    }


    handleKeyDown(event) {
        console.log("handle Keydown", event, this.props.keystroke);
        this.playNote();
    }

    playNote() {
        // console.log(this.props.note);
        const noteAudio = document.getElementById(this.props.note)
        const pianokey = document.getElementById("Key-".concat(this.props.note))
        console.log('playNote ', this.props.note, noteAudio, pianokey);
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





//export default function PianoKey(props) {
//     return (
//         <div id={props.id} 
//             data-note={props.note} 
//             className={props.className} 
//             onClick={props.onClick}
//             keystroke={props.keystroke}
//             onKeyDown={props.onKeyDown}
//             tabIndex="0"
//             >

//             </div>
//     );
// }
