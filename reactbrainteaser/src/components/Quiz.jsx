import { useCallback, useState } from "react";
import QUESTIONS from "../questions"
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer";

export default function Quiz()
{
    const [userAnswers,setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;
    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer)
    {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer]
        })
    },[]);
    
    const onTimeout = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer])
    if( quizIsCompleted )
    {
        return (
            <div id="summary">
                 <img src={quizCompleteImg} alt="Trophy Icon"/>
                 <h2>Quiz Completed!</h2>
            </div>
        )
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffledAnswers.sort((a,b) =>  Math.random() - 0.5);

    return (
        <div id="quiz">
        <div id="question">
        <QuestionTimer timeout={10000} onTimeout={onTimeout} key={activeQuestionIndex} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
            {
                shuffledAnswers.map((answer) => (
                   <li key={answer} className="answer">
                      <button onClick={() => handleSelectAnswer(activeQuestionIndex)}>
                         {answer}
                      </button>
                   </li>
                ))
            }
        </ul>
        </div>
        </div>
    );
}