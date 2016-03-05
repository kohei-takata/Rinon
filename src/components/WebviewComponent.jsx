import React from 'react';
import ReactDOM from 'react-dom';

export default class WebviewComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div key={this.props.name} style={{display: this.props.isMain? 'block': 'none', height: '750px'}}>
                <webview id={`${this.props.name}-webview`} src={this.props.url} autosize="on">Loading...</webview>
            </div>
        );
    };
}

