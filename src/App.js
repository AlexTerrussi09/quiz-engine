import React from 'react';
import data from './data/quiz-2.json';
// import data from './data/quiz.json';
import './styles/App.css';
import { Quiz } from './components/Quiz';

function App() {
  return (
    <div className="App">
      <Quiz data={data} />
    </div>
  );
}

export default App;
