const React = require('react');
const styles = require('../styles');

function MainContainerWrapper(props) {
  return (
    <div className='' style={styles.transparentBg}>
      {props.children}
    </div>
  )
}

module.exports = MainContainerWrapper;
