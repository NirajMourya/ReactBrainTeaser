import { useCallback, useState } from "react";
import QUESTIONS from "../questions"
import quizCompleteImg from '../assets/quiz-complete.png';
import Questions from "./Questions";


export default function Quiz()
{
    
    const [userAnswers,setUserAnswers] = useState([]);
    const [answerState, setAnswerState] = useState('');
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;
    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer)
    {
        setAnswerState('answered')
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer]
        })

        setTimeout(() => {
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0])
            {
                setAnswerState('correct')
            }
            else{
                setAnswerState('wrong');
            }
            setTimeout(() =>{
                  setAnswerState('')   
            },2000)
        },1000)
    },[activeQuestionIndex]);
    
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
    
    return (
        <div id="quiz">
            <Questions 
              key={activeQuestionIndex}
              questionText={QUESTIONS[activeQuestionIndex].text}
              answers={QUESTIONS[activeQuestionIndex].answers} 
              onSelectAnswer={handleSelectAnswer}
              selectedAnswer={userAnswers[userAnswers.length - 1]} 
              answerState={answerState}
              onTimeout={onTimeout}
            />
        </div>
    );
}