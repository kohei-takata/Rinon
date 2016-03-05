import React from 'react';
import ReactDOM from 'react-dom';

export default class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    _handleClick(e) {
        this.props.handleClick(e.target.id);
    }
    render() {
        return (
            <p key={this.props.name}>
                <button id={`${this.props.name}-menu`} onClick={this._handleClick.bind(this)}>{this.props.name}</button>
            </p>
        );
    };
}