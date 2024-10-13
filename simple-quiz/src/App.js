import React, { useState } from 'react';

const questions = [
  {
    questionText: 'What is the name of our teachers App?',
    answerOptions: [
      { answerText: 'Smitter', isCorrect: false },
      { answerText: 'Bitter', isCorrect: false },
      { answerText: 'Glitter', isCorrect: false },
      { answerText: 'Smitten', isCorrect: true },
    ],
  },
  {
    questionText: 'Who is the CEO of this house?',
    answerOptions: [
      { answerText: 'Not you', isCorrect: false },
      { answerText: 'Def not you', isCorrect: false },
      { answerText: 'Me', isCorrect: false },
      { answerText: 'Your wife', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the largest planet in our solar system?',
    answerOptions: [
      { answerText: 'UR Anus', isCorrect: false },
      { answerText: 'Jupiter', isCorrect: true },
      { answerText: 'Your MaMa', isCorrect: false },
      { answerText: 'Penus', isCorrect: false },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleResetClick = () => {
    setCurrentQuestion(0);
    setScore(0);  
    setShowScore(false);
  };

  return (
    <div className="h-screen bg-pink-100 flex justify-center items-center">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-lg">
        {showScore ? (
          <div>
            <div className="text-2xl font-bold mb-4">
             Vá en klár - You scored {score} out of {questions.length}
            </div>
            <button
              onClick={handleResetClick}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow"
            >
              Reset Quiz
            </button>
          </div>
        ) : (
          <>
            <div className="text-xl font-bold mb-4">
              {questions[currentQuestion].questionText}
            </div>
            <div className="flex flex-col space-y-4">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                    className="bg-gray-200 p-4 rounded shadow hover:bg-blue-300"
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
