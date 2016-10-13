const React = require('react');
const transparentBg = require('../styles').transparentBg;
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const Home = React.createClass({
  render() {
    return(
      <div className='' style={transparentBg}>
        <h1>GithubBattle</h1>
        <p className='' > Some Fancy Motto</p>
        <Link to='/playerOne'>
          <button type='button' className=''>Get Started</button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
