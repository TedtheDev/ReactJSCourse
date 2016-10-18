const React = require('react');
const PropTypes = React.PropTypes;

function UserDetailsWrapper(props) {
  return (
    <div className=''>
      <p className=''>{props.header}</p>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.PropTypes = {

}

module.exports = UserDetailsWrapper;
