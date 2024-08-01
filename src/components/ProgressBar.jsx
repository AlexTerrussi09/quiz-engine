
import React from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar__fill" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
