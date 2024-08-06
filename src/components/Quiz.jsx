import React, { useContext, useEffect, useState } from 'react'
import ProgressBar from './ProgressBar';
import Question from './Questions';
import "../styles/Quiz.css"
import ThemeToggleButton from './ThemeToggleButton';
import { ThemeContext } from '../context/ThemeContext';

export const Quiz = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const totalQuestions = data.quiz.questions.length;

  const handleNextQuestion = (nextQuestionId) => {
    setFadeOut(true);
    setTimeout(() => {
      const nextQuestionIndex = data.quiz.questions.findIndex(
        (question) => question.id === nextQuestionId
      );
      setCurrentQuestionIndex(nextQuestionIndex);
      setFadeOut(false);
    }, 800); // Duración de la animación de salida
  };

  const progress = data.quiz.questions[currentQuestionIndex] ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 100
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <ProgressBar progress={progress} />
      <div className="quiz">
        <div className={`question-container ${fadeOut ? 'fade-out' : 'fade-in'}`}>
          <Question
            question={data.quiz.questions[currentQuestionIndex]}
            onNextQuestion={handleNextQuestion}
          />
        </div>
        <ThemeToggleButton />
      </div>
    </>

  );
}
