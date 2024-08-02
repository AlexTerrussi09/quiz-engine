// src/components/Question.js
import React, { useState } from 'react';
import Option from './Option';
import "../styles/Questions.css"

const Question = ({ question, onNextQuestion }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleOptionClick = (option) => {
    console.log(question)
    if (!question) {
      onNextQuestion(1)
    }
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

  return (
    <div className="question">
      {question ?
        <>
          <h2>{question.text}</h2>
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
              <div key={index} className="option">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionClick(option)}
                />
                {option.text}
              </div>
            ))}

          {question.type === 'input' && (
            <div className='div-input'>
              <textarea
              className="input-option"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          )}

          {question.type !== 'single' && (
            <button onClick={handleSubmit}>Siguiente</button>
          )}
        </>
        :
        <>
          <h2>
            Quiz Terminado
          </h2>
          <button className='optionButton' onClick={() => handleOptionClick({nextQuestionId: 1})}>Volver a empezar</button>
        </>
      }

    </div>
  );
};

export default Question;
