const React = require('react');
const PropTypes = React.PropTypes;
const styles = require('../styles')
const Link = require('react-router').Link;
const UserDetails = require('./UserDetails');
const UserDetailsWrapper = require('./UserDetailsWrapper');
const MainContainerWrapper = require('./MainContainerWrapper');
const Loading = require('./Loading');

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <Loading speed={800} text='Wait One Moment'/>
    : <MainContainerWrapper>
        <h1>Confirm players</h1>
        <div className=''>
          <UserDetailsWrapper header="Player 1">
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player 2">
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className='' >
          <div className='' style={styles.space}>
            <button type='button' className='' onClick={props.onInitiateBattle} >
              Initiate Battle!
            </button>
          </div>
          <div className='' style={styles.space}>
            <Link to='/playerOne'>
              <button type='button' className='' >
                Reselect Players
              </button>
            </Link>
          </div>
        </div>
    </MainContainerWrapper>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
