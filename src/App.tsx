import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AnswerPart from "./components/Answer/AnswerPart";
import dataQz from "./quiz_data.json";
type Question = {
  question: string;
  options: string[];
  answer: string;
};
const shuffleArray = (array: Question[]) => {
  return array.sort(() => Math.random() - 0.5);
};
const shuffleQz = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};
function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>();

  useEffect(() => {
    const shuffledQuestions = shuffleArray([...dataQz]).map((question) => ({
      ...question,
      options: shuffleQz([...question.options]),
    }));
    setQuestions(shuffledQuestions);
  }, []);
  const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));
  const handleSelectOption = async (answer: Boolean) => {
    if (answer) {
      setScore(score + 1);
    }
    const nextIdx = questionIndex + 1;

    if (nextIdx < questions.length) {
      await delay(3000);
      setQuestionIndex(nextIdx);
    } else {
      setQuestions([]);
    }
  };
  return (
    <div className="App">
      <div className="h-screen">
        <div>{score}</div>
        <div className="h-1/2">
          <p className="text-3xl mt-4">
            {questions.length > 0 && questions[questionIndex].question}
          </p>
        </div>
        {questions.length > 0 && (
          <AnswerPart
            answers={questions[questionIndex].options}
            chosedAnsw={(e: Boolean) => handleSelectOption(e)}
            crrAnswer={questions[questionIndex].answer}
          />
        )}
      </div>
    </div>
  );
}

export default App;
