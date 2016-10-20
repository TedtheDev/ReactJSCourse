const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const MainContainerWrapper = require('./MainContainerWrapper');

const Home = React.createClass({
  render() {
    return(
      <MainContainerWrapper>
        <h1>GithubBattle</h1>
        <p className='' > Some Fancy Motto</p>
        <Link to='/playerOne'>
          <button type='button' className=''>Get Started</button>
        </Link>
      </MainContainerWrapper>
    )
  }
});

module.exports = Home;
