import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import Question from './Questions';

export const Quiz = ({ data }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const totalQuestions = data.quiz.questions.length;
  
    const handleNextQuestion = (nextQuestionId) => {
      const nextQuestionIndex = data.quiz.questions.findIndex(
        (question) => question.id === nextQuestionId
      );
      setCurrentQuestionIndex(nextQuestionIndex);
    };
  
    const progress = data.quiz.questions[currentQuestionIndex]? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 100
  
    return (
      <div className="quiz">
        <ProgressBar progress={progress} />
        <Question
          question={data.quiz.questions[currentQuestionIndex]}
          onNextQuestion={handleNextQuestion}
        />
      </div>
    );
}
