import React from 'react';

const Option = ({ option, onClick }) => {
  return (
    <div className="option">
      <button onClick={onClick}>{option.text}</button>
    </div>
  );
};

export default Option;