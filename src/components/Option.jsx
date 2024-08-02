import React from 'react';
import "../styles/Options.css"

const Option = ({ option, onClick }) => {
  return (
    <div className="option">
      <button  className='optionButton' onClick={onClick}>{option.text}</button>
    </div>
  );
};

export default Option;