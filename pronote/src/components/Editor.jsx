import React, { Component } from 'react';
import "./Editor.css"

export default class Editor extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: '',
        }
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea onChange={this.handleChange} defaultValue={this.state.value} className="input-text" />
                </div>
                <div className="pronote">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>

            </div>
        )
    }
}
