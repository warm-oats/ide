const { Menu, dialog } = require("electron");

const menu = Menu.buildFromTemplate([
    {
        label: "File",
        submenu: [
            {
                label: "New File",
                click: openFile
            },
            {
                label: "Open Folder",
                click: openFolder
            },
            {
                label: "Save",
                click: save
            }
        ]
    }
]);

async function openFile() {
    const result = await dialog.showOpenDialog({
        properties: ["openFile"]
    });

    if (!result.canceled) {
        console.log("Selected file:", result.filePaths[0]);
    }
}

async function openFolder() {
    const result = await dialog.showOpenDialog({
        properties: ["openDirectory"]
    });

    if (!result.canceled) {
        console.log("Selected directory:", result.filePaths[0]);
    }
}

async function save() {
    ;
}

module.exports = menu;