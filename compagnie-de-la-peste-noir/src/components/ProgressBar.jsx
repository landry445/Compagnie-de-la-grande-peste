import React from 'react';
import './form.css';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="ProgressBar">
      <div className="ProgressBar-container">
        <div className="ProgressBar-filler" style={{ width: `${percentage}%` }}>
          <span className="ProgressBar-label">{`${percentage}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
