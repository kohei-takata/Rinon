import React from 'react';
import ReactDOM from 'react-dom';

export default class UrlBarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    back() {
        document.getElementById(`${this.props.main.name}-webview`).goBack();
    }

    forward() {
        document.getElementById(`${this.props.main.name}-webview`).goForward();
    }

    reload() {
        document.getElementById(`${this.props.main.name}-webview`).reload();
    }

    openDevTool() {
        document.getElementById(`${this.props.main.name}-webview`).openDevTools();
    }

    _handleSubmitUrl(e) {
        this.props.handleSubmitUrl();
        e.preventDefault();
    }

    _handleChangeUrl(e) {
        this.props.handleChangeUrl(e.target.value);
    }

    render() {
        return (
            <div className="pure-menu pure-menu-horizontal" id="urlBar">
                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link" onClick={this.back.bind(this)}>戻る</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link" onClick={this.forward.bind(this)}>進む</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link" onClick={this.reload.bind(this)}>更新</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link" onClick={this.openDevTool.bind(this)}>DevTool</a></li>
                    <li className="pure-menu-item"><input type="url" id="url" value={this.props.url} onChange={this._handleChangeUrl.bind(this)} /></li>
                </ul>
            </div>
        );
    };
}

