import React, { useContext, useEffect, useState } from 'react';
import "../styles/Options.css"
import { ThemeContext } from '../context/ThemeContext';

const Option = ({ option, onClick }) => {
  const { theme } = useContext(ThemeContext);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (isSelected) {
      const timer = setTimeout(() => setIsSelected(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isSelected]);

  const handleClick = () => {
    setIsSelected(true);
    onClick(option);
  };
  return (
    <div className="option">
      <button className={`optionButton ${isSelected ? 'selected' : ''} ${theme}`} onClick={handleClick}>{option.text}</button>
    </div>
  );
};

export default Option;