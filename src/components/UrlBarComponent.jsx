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
            <div id="urlBar" className="navbar-custom-menu">
                <button onClick={this.back.bind(this)}>戻る</button>
                <button onClick={this.forward.bind(this)}>進む</button>
                <button onClick={this.reload.bind(this)}>更新</button>
                <button onClick={this.openDevTool.bind(this)}>DevTool</button>
                <form onSubmit={this._handleSubmitUrl.bind(this)}>
                    <input type="url" id="url" value={this.props.url} onChange={this._handleChangeUrl.bind(this)} />
                </form>
            </div>
        );
    };
}

