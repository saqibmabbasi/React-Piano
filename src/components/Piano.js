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

    renderKey(id, note , class_Name) {
        const key = this.state;
        const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
        const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
        let keyCode = "";

        const whiteKeyIndex = WHITE_KEYS.indexOf(key.key)
        const blackKeyIndex = BLACK_KEYS.indexOf(key.key)

        //if ((whiteKeyIndex === -1) && (blackKeyIndex === -1))   return;

        if ((whiteKeyIndex > -1) || (blackKeyIndex > -1)) {
            keyCode = key.key;
            console.log({key}, whiteKeyIndex, blackKeyIndex, keyCode);
        }
            
        return (
            <PianoKey
                id={id}
                note={note}
                className={"pianokey " + class_Name }
                keystroke={keyCode}
                playFile={"notes/" + note + ".mp3"}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="piano" onKeyDown={this.onKeyDown}>
                    {this.renderKey("Key-C", "C", "white")}
                    {this.renderKey("Key-Db", "Db", "black")}
                    {this.renderKey("Key-D", "D", "white")}
                    {this.renderKey("Key-Eb", "Eb", "black")}
                    {this.renderKey("Key-E", "E", "white")}
                    {this.renderKey("Key-F", "F", "white")}
                    {this.renderKey("Key-Gb", "Gb", "black")}
                    {this.renderKey("Key-G", "G", "white")}
                    {this.renderKey("Key-Ab", "Ab", "black")}
                    {this.renderKey("Key-A", "A", "white")}
                    {this.renderKey("Key-Bb", "Bb", "black")}
                    {this.renderKey("Key-B", "B", "white")}
                </div>
            </div>
        );
    }

}
