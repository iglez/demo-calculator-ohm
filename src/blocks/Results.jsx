import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ results }) => {
  console.log('MY DATA ====>', results)
  const { resistance, min, max, tolerance } = results;

  return (
    <div className="results-section content">
      <h3>Results</h3>
      <p>Resistance: {resistance}</p>
      <p>Tolerance: {tolerance}</p>
      <p>Minimum: {min}</p>
      <p>Maximum: {max}</p>
    </div>
  )
}

Results.propTypes = {
  results: PropTypes.object.isRequired
}

export default Results;