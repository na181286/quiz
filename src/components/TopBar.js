import React from 'react';
import PropTypes from 'prop-types';

function TopBar(props) {
  return (
    <>
      <div className="container">
        TopBar
      </div>
    </>
  );
}

TopBar.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default TopBar;
