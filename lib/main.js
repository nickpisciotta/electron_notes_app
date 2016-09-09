const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('ready', function() {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    center: true,
    title: "Quick Note",
    titleBarStyle: "hidden-inset"
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
});
