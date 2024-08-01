
import { Quiz } from './components/Quiz';
import quizData from './data/quiz-2.json';

function App() {
    return (
        <div className="App">
            <h1>Quiz</h1>
            <Quiz data={quizData} />
        </div>
    );
}

export default App;
