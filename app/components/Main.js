const React = require('react');

const Main = React.createClass({
  render() {
    return(
      <div>
        Hello from Main
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
