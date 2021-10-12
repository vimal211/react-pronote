import React, { Component } from 'react';
import "./Editor.css"

export default class Editor extends Component {
    render() {
        return (
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" />
                </div>
                <div className="pronote">
                    <h3>Pro Note</h3>
                    <div className="output-text"></div>
                </div>

            </div>
        )
    }
}
