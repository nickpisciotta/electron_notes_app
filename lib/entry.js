const React = require('react');
const ReactDOM = require('react-dom');

var Message = React.createClass({
    render: function () {
    return (
      <p>
        Some text
      </p>
    );
  }
});

ReactDOM.render(
  <Message />,
  document.getElementById('right')
);
