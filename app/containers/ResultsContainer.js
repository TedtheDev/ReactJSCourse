const React = require('react');
const PropTypes = React.PropTypes;
const Results = require('../components/Results');
const githubHelpers = require('../utils/githubHelpers');

const ResultsContainer = React.createClass({
  getInitialState() {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount() {
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores) {
        this.setState({
          scores: scores,
          isLoading: false
        })
      }.bind(this))
  },
  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo}/>
    )
  }
});

module.exports = ResultsContainer;
