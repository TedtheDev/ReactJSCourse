const React = require('react');
const ConfirmBattle = require('../components/ConfirmBattle');

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount() {
    const query = this.props.location.query;
    //fetch info from github then update the state
  },
  render(){
    return (
      <ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo}/>
    )
  }
});

module.exports = ConfirmBattleContainer;
