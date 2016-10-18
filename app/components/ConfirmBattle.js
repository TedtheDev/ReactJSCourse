const React = require('react');
const PropTypes = React.PropTypes;
const styles = require('../styles')
const Link = require('react-router').Link;
const UserDetails = require('./UserDetails');
const UserDetailsWrapper = require('./UserDetailsWrapper');

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <div>IS LOADING</div>
    : <div className='' style={styles.transparentBg}>
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
    </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
