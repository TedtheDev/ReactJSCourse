const React = require('react');

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <div>IS LOADING</div>
    : <div>CONFIRM BATTLE!</div>
}

module.exports = ConfirmBattle;
