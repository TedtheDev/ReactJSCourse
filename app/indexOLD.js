const React = require('react')
const ReactDOM = require('react-dom')

const USER = {
  firstName: 'Barb',
  lastName: 'Smith',
  age: 50,
  location: 'USA'
};

const Link = React.createClass({
    changeURL() {
      window.location.replace(this.props.href)
    },
    render() {
      return (
        <span
          style={{ color: 'blue', cursor: 'pointer'}}
          onClick={this.changeURL}>
          { this.props.children }
        </span>
      )
    }
});

const FirstName = React.createClass({
  render() {
    return (
      <span>
        <Link href={'https://www.google.com/search?site=&source=hp&q=' + this.props.firstName } >
          {this.props.firstName}
        </Link>
      </span>
    )
  }
});

const LastName = React.createClass({
  render() {
    return (
      <span>
        {this.props.lastName}
      </span>
    )
  }
});

const FullName = React.createClass({
  render() {
    return (
      <span>
        <FirstName firstName={this.props.firstName} /> <LastName lastName={this.props.lastName} />
      </span>
    )
  }
});

const HelloGreeting = React.createClass({
  render() {
    return (
      <span>
        Hello <FullName firstName={this.props.user.firstName} lastName={this.props.user.lastName} />!<br/>
        <AgeMessage age={this.props.user.age} />
      </span>
    )
  }
});

const AgeMessage = React.createClass({
  render() {
    return (
      <div>
        You are {this.props.age} years old.
      </div>
    )
  }
});


const HelloWorld = React.createClass({
  render() {
    return (
      <div>
        <HelloGreeting user={this.props.user} />
      </div>
    )
  }
});

ReactDOM.render(<HelloWorld user={USER} />, document.getElementById('app'));
