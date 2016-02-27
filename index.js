"use strict";

const storage = require('electron-json-storage');
storage.get('menu', function (error, data) {
    if (error) throw error;
    if (data) {
        const webview = document.getElementById("webview");
        webview.setAttribute("src", data.main.url);
        webview.addEventListener("dom-ready", function() {
            document.getElementById("url").value = webview.getURL();
        });
        const menuList = document.getElementById("menuList");
        for(let i = 0; i < data.sub.length;i++) {
            let button = document.createElement("button");
            button.setAttribute("onclick", 'webview.setAttribute("src", "' + data.sub[i].url + '");');
            button.innerHTML = data.sub[i].name;
            let p = document.createElement("p");
            p.appendChild(button);
            menuList.appendChild(p);
        }
    }
});

function back() {
    const webview = document.getElementById("webview");
    webview.goBack();
}
function forward() {
    const webview = document.getElementById("webview");
    webview.goForward();
}
function reload() {
    const webview = document.getElementById("webview");
    webview.reload();
}
function onload() {
    const webview = document.getElementById("webview");
    const indicator = document.querySelector(".indicator");

    webview.addEventListener("did-start-loading", () => {
        indicator.innerText = "Loading...";
    });
    webview.addEventListener("did-stop-loading", () => {
        indicator.innerText = "";
    });
}

function openDevTool() {
    const webview = document.getElementById("webview");
    webview.openDevTools();
}

function changeUrl() {
    const webview = document.getElementById("webview");
    webview.setAttribute("src", document.getElementById("url").value);
}