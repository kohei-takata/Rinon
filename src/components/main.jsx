import React from 'react';
import ReactDOM from 'react-dom';
import storage from 'electron-json-storage';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            main: {},
            sub: []
        };
    }

    componentDidMount() {
        storage.get('menu', function (error, data) {
            if (error) throw error;
            if (data) {
                this.setState({
                    main: data.main,
                    sub: data.sub
                });
            }
        }.bind(this));
    }

    handleClick(e) {
        this.state.sub.filter((menu) => {
            return `${menu.name}-menu` ===  e.target.id
        }).map((data) => this.setState({
            main: data
        }));
    }

    back(name) {
        document.getElementById(`${name}-webview`).goBack();
    }

    forward(name) {
        document.getElementById(`${name}-webview`).goForward();
    }

    reload(name) {
        document.getElementById(`${name}-webview`).reload();
    }

    openDevTool(name) {
        document.getElementById(`${name}-webview`).openDevTools();
    }

    render() {
        let menuListComponent = this.state.sub && this.state.sub.map((menu) => {
                return (
                    <p key={menu.name}>
                        <button id={`${menu.name}-menu`} onClick={this.handleClick.bind(this)}>{menu.name}</button>
                    </p>
                );
            });

        let webviewListComponent = this.state.sub && this.state.sub.map((webview) => {
            return (
                    <div key={webview.name} style={{display: this.state.main.url === webview.url? 'block': 'none', height: '750px'}}>
                        <webview id={`${webview.name}-webview`} src={webview.url} autosize="on">Loading...</webview>
                    </div>
                );
        });
        return (
            <div>
                <div id="menu">
                    <div>Menu</div>
                        <span>
                            {menuListComponent}
                        </span>
                    </div>
                    <div id="content">
                        <div id="urlBar">
                            <button onClick={this.back.bind(this, this.state.main.name)}>戻る</button>
                            <button onClick={this.forward.bind(this, this.state.main.name)}>進む</button>
                            <button onClick={this.reload.bind(this, this.state.main.name)}>更新</button>
                            <button onClick={this.openDevTool.bind(this, this.state.main.name)}>DevTool</button>
                        </div>
                        <div>
                            <form onsubmit="changeUrl();return false;">
                                <input type="url" id="url" value=""/>
                            </form>
                        </div>
                        <div>
                            {webviewListComponent}
                        </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("component"));