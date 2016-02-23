'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');

require('crash-reporter').start();

let mainWindow = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit();
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.test = 'test';

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});