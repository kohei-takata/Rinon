import React from 'react';
import ReactDOM from 'react-dom';
import storage from 'electron-json-storage';

import MenuComponent from './MenuComponent';
import WebviewComponent from './WebviewComponent';
import UrlBarComponent from './UrlBarComponent';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            main: {},
            sub: [],
            url: ''
        };
    }

    componentDidMount() {
        storage.get('menu', (error, data) => {
            if (error) throw error;
            if (data) {
                this.setState({
                    main: data.main,
                    sub: data.sub,
                    url: data.main.url
                }, () => {
                    // Add all webview tag a function when 'dom-ready'.
                    this.state.sub && this.state.sub.forEach((sub) => {
                        let webview = document.getElementById(`${sub.name}-webview`);
                        webview && webview.addEventListener("dom-ready", () => {
                            let _sub = this.state.sub;
                            _sub = _sub.map((obj) => {
                                if(obj.name === sub.name) {
                                    obj.url =  webview.getURL();
                                }
                                return obj;
                            });
                            this.setState({
                                sub: _sub,
                                url: webview.getURL()
                            });
                        });
                    });
                });
            }
        });
    }

    handleClick(menuId) {
        this.state.sub.filter((menu) => {
            return `${menu.name}-menu` ===  menuId
        }).map((data) => this.setState({
            main: data,
            url: data.url
        }));
    }

    handleSubmitUrl(e) {
        let _sub = this.state.sub;
        _sub = _sub.map((obj) => {
            if(obj.name === this.state.main.name) {
                obj.url =  document.getElementById("url").value;
            }
            return obj;
        });
        this.setState({
            sub: _sub
        });
    }

    handleChangeUrl(url) {
        this.setState({
            url: url
        })
    }

    render() {
        let menuList = this.state.sub && this.state.sub.map((menu) => {
                return <MenuComponent key={menu.name} name={menu.name} handleClick={this.handleClick.bind(this)} />
            });
        let webviewList = this.state.sub && this.state.sub.map((webview) => {
                return <WebviewComponent key={webview.name} name={webview.name} url={webview.url} isMain={this.state.main.url === webview.url} />
            });
        return (
            <div>
                <div id="menu">
                    <div>Menu</div>
                        <span>
                            {menuList}
                        </span>
                </div>
                <div id="content">
                    <UrlBarComponent main={this.state.main} url={this.state.url} handleSubmitUrl={this.handleSubmitUrl.bind(this)} handleChangeUrl={this.handleChangeUrl.bind(this)} />
                    <div>
                        {webviewList}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<MainComponent />, document.getElementById("component"));