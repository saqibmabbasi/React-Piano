import React from 'react';
import PianoKey from './PianoKey.js';

export default class Piano extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown.bind(this));
    }

    onKeyDown = (e) => this.setState({ key: e.key });

    renderKey(id, note , class_Name, audioFile) {
        const key = this.state;
        const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
        const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
        let keyCode = "";

        const whiteKeyIndex = WHITE_KEYS.indexOf(key.key)
        const blackKeyIndex = BLACK_KEYS.indexOf(key.key)

        //if ((whiteKeyIndex === -1) && (blackKeyIndex === -1))   return;

        if ((whiteKeyIndex > -1) || (blackKeyIndex > -1)) {
            keyCode = key.key;
            console.log({key}, whiteKeyIndex, blackKeyIndex);
        }
            
        return (
            <PianoKey
                id={id}
                note={note}
                className={ "pianokey " + class_Name }
                keystroke={keyCode}
                playFile={audioFile}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="piano">
                    {this.renderKey("Key-C", "C", "white", "notes/C.mp3")}
                    {this.renderKey("Key-Db", "Db", "black", "notes/Db.mp3")}
                    {this.renderKey("Key-D", "D", "white", "notes/D.mp3")}
                    {this.renderKey("Key-Eb", "Eb", "black", "notes/Eb.mp3")}
                    {this.renderKey("Key-E", "E", "white", "notes/E.mp3")}
                    {this.renderKey("Key-F", "F", "white", "notes/F.mp3")}
                    {this.renderKey("Key-Gb", "Gb", "black", "notes/Gb.mp3")}
                    {this.renderKey("Key-G", "G", "white", "notes/G.mp3")}
                    {this.renderKey("Key-Ab", "Ab", "black", "notes/Ab.mp3")}
                    {this.renderKey("Key-A", "A", "white", "notes/A.mp3")}
                    {this.renderKey("Key-Bb", "Bb", "black", "notes/Bb.mp3")}
                    {this.renderKey("Key-B", "B", "white", "notes/B.mp3")}
                </div>
            </div>
        );
    }

}
