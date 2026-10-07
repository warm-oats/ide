const { app, BrowserWindow, Menu } = require("electron");
const fs = require("fs");
const menu = require("./js/menu")
require("electron-reload")(__dirname);

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            preload: __dirname + "/preload.js"
        }
    });

    win.loadFile("index.html");
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    Menu.setApplicationMenu(menu);
    createWindow();
});