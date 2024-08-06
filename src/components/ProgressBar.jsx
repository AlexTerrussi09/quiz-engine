
import React, { useContext } from 'react';
import '../styles/ProgressBar.css';
import { ThemeContext } from '../context/ThemeContext';

const ProgressBar = ({ progress }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`progress-container ${theme}`}>
      <div className={`progress-bar ${theme}`} style={{ width: `${progress}%` }}>
        <span>{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
