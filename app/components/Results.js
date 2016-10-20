const React = require('react');
const PropTypes = React.PropTypes;
const styles = require('../styles');
const UserDetails = require('../components/UserDetails');
const UserDetailsWrapper = require('../components/UserDetailsWrapper');
const Link = require('react-router').Link;
const MainContainerWrapper = require('./MainContainerWrapper')
const Loading = require('./Loading');

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function StartOver() {
  return (
    <MainContainerWrapper >
      <Link to='/playerOne'>
        <button type='button' className=''>Start Over</button>
      </Link>
    </MainContainerWrapper>
  )
}

function Results(props) {
  if(props.isLoading === true) {
    return (
      <Loading text='Battling' speed={180}/>
    )
  }

  if(props.scores[0] === props.scores[1]) {
    return (
      <MainContainerWrapper>
        <h1>IT'S A TIE!</h1>
        <StartOver />
      </MainContainerWrapper>
    )
  }

  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;

  return (
        <MainContainerWrapper>
      <h1>Results</h1>
      <div className=''>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainerWrapper>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = Results;
