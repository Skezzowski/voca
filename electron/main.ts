const { app, BrowserWindow, ipcMain } = require('electron');
const url = require('url');
const path = require('path');

const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(
    url.format({
      pathname: `../dist/index.html`,
      protocol: 'file:',
      slashes: true
    })
  );
  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.removeMenu();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { app.quit(); }
});

app.on('activate', () => {
  if (mainWindow === null) { createWindow(); }
});

function readVocabularies(event, filePath) {
  fs.readFile(filePath, { encoding: 'utf-8' }, (err, fileValue) => {
    if (err) {
      console.log(err);
      event.reply('getVocabularies', undefined);
    } else {
      event.reply('getVocabularies', JSON.parse(fileValue));
    }
  });
}

ipcMain.on('askVocabularies', (event, filePath) => {
  readVocabularies(event, filePath);
});

ipcMain.on('writeFile', (event, filePath, data) => {
  fs.writeFile(filePath, JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    }
  });
});
