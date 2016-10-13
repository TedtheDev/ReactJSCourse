const React = require('react');
const transparentBg = require('../styles').transparentBg;
const PropTypes = React.PropTypes;


//stateless functional components
function Prompt (props) {
  return(
    <div className='' style={transparentBg}>
      <h1>{props.header}</h1>
      <div className=''>
        <form onSubmit={props.onSubmitUser}>
          <div className=''>
            <input
              className=''
              onChange={props.onUpdateUser}
              value={props.username}
              placeholder='Github Username'
              type='text' />
          </div>
          <div className=''>
            <button
              className=''
              type='submit'>
                Continue
              </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt;
