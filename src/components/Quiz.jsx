import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import Question from './Questions';
import "../styles/Quiz.css"

export const Quiz = ({ data }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [Results, setResults] = useState([])

  const totalQuestions = data.quiz.questions.length;

  const handleNextQuestion = (nextQuestionId, QuestionId) => {
    setResults([...Results, data.quiz.questions.find(d=>d.id === parseInt(QuestionId))])
    console.log(Results)
    setFadeOut(true);
    setTimeout(() => {
      const nextQuestionIndex = data.quiz.questions.findIndex(
        (question) => question.id === nextQuestionId
      );
      setCurrentQuestionIndex(nextQuestionIndex);
      setFadeOut(false);
    }, 500); // Duración de la animación de salida
  };

  const progress = data.quiz.questions[currentQuestionIndex] ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 100

  return (
    <div className="quiz">
      <ProgressBar progress={progress} />
      <div className={`question-container ${fadeOut ? 'fade-out' : 'fade-in'}`}>
        <Question
          question={data.quiz.questions[currentQuestionIndex]}
          onNextQuestion={handleNextQuestion}
          results={Results}
        />
      </div>
    </div>
  );
}
