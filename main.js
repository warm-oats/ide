const { app, BrowserWindow } = require("electron");
const fs = require("fs")

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 700
    });

    win.loadFile("index.html");
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);