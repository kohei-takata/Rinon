"use strict";

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