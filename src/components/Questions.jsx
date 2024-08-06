// src/components/Question.js
import React, { useContext, useState } from 'react';
import Option from './Option';
import "../styles/Questions.css"
import "../styles/Options.css"
import { ThemeContext } from '../context/ThemeContext';

const Question = ({ question, onNextQuestion }) => {
  const { theme } = useContext(ThemeContext);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleOptionClick = (option) => {
    if (question.type === 'single') {
      onNextQuestion(option.nextQuestionId);
    } else if (question.type === 'multiple') {
      setSelectedOptions((prev) => {
        if (prev.includes(option)) {
          return prev.filter((item) => item !== option);
        } else {
          return [...prev, option];
        }
      });
    }
  };

  const handleSubmit = () => {
    if (question.type === 'multiple') {
      onNextQuestion(question.options[0].nextQuestionId); // Assuming all options lead to the same next question
    } else if (question.type === 'input') {
      onNextQuestion(question.nextQuestionId);
    }
  };

  const handleReset = () => {
    onNextQuestion(1);
    setSelectedOptions([])
  }

  return (
    <div className={`question ${theme}`}>
      {question ?
        <>
          <h3>{question.text}</h3>
          {question.type === 'single' &&
            question.options.map((option, index) => (
              <Option
                key={index}
                option={option}
                onClick={() => handleOptionClick(option)}
              />
            ))}

          {question.type === 'multiple' &&
            question.options.map((option, index) => (
              <div key={index} className="custom-checkbox">
                <input
                  id={`checkbox-${index}`}
                  className={`checkbox ${theme}`}
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionClick(option)}
                />
                <label htmlFor={`checkbox-${index}`} className={`label ${theme}`}>{option.text}</label>
              </div>
            ))}

          {question.type === 'input' && (
            <div className="input-option">
              <textarea
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          )}

          {question.type !== 'single' && (
            <button className={`optionButton ${theme}`} onClick={handleSubmit}>Continue</button>
          )}
        </>
        :
        <>
          <h2>Quiz Terminado!</h2>
          <button className={`optionButton ${theme}`} onClick={handleReset}>Volver a empezar</button>
        </>
      }

    </div>
  );
};

export default Question;