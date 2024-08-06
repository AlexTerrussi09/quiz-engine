import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/ThemeToggleButton.css';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={`theme-toggle-button ${theme}`} onClick={toggleTheme}>
      {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
    </button>
  );
};

export default ThemeToggleButton;
