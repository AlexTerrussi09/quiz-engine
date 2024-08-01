import React from 'react';
import Option from './Option';

const Question = ({ question, onNextQuestion }) => {
  const handleOptionClick = (nextQuestionId) => {
    onNextQuestion(nextQuestionId);
  };

  return (
    <div className="question">
        {question?
        <>
              <h2>{question.text}</h2>
      {question.options.map((option, index) => (
        <Option
          key={index}
          option={option}
          onClick={() => handleOptionClick(option.nextQuestionId)}
        />
      ))}
        </>
        :
        <>
        <h2>
            Quiz Terminado
        </h2>
        <button onClick={() => handleOptionClick(1)}>Volver a empezar</button>
        </>
        }
    </div>
  );
};

export default Question;