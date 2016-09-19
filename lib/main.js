const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const dialog = electron.dialog;
const fs = require('fs');

let mainWindow = null;

app.on('ready', function() {

  mainWindow = new BrowserWindow({
    width: 900,
    height: 500,
    center: true,
    title: "Quick Note",
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
});

const openFile = function() {
  var files = dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      {name: "Markdown Files", extensions: ["md", "markdown", "txt"]}
    ]
  });

  if (!files) {return;}
  var file = files[0]
  var content = fs.readFileSync(file).toString();
  mainWindow.webContents.send('file-opened', file, content);
};

module.exports = openFile;
