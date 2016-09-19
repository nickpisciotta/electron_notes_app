const electron = require('electron');
const ipc = electron.ipcRenderer;
const $ = require('jquery');
const $noteField = $(".note-field");
const $openFileButton = $('.open-file')
const React = require('react');
const ReactDOM = require('react-dom');
const remote = electron.remote
const mainProcess = remote.require('../main.js');


ipc.on('file-opened', function (event, file, content) {
  $noteField.text(content);
});

$openFileButton.on('click', function() {
  mainProcess.openFile();
})


var OpenFile = React.createClass({
    render: function () {
    return (
      <button >
        Open File
      </button>
    );
  }
});

var SaveNote = React.createClass({
    render: function () {
    return (
      <button>
        Save Note
      </button>
    );
  }
});

ReactDOM.render(
  <OpenFile/>,
  document.getElementById('open-file')
);

ReactDOM.render(
  <SaveNote/>,
  document.getElementById('save-note')
);
