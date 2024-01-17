import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Questions({questionText, answers, onSelectAnswer, selectedAnswer, answerState , onTimeout})
{
    return (
        <div id="question">
                <QuestionTimer timeout={10000} onTimeout={onTimeout}  />
                <h2>{questionText}</h2>
                <Answers 
                    answers={answers} 
                    selectedAnswer={selectedAnswer} 
                    answerState={answerState}
                    onSelect={onSelectAnswer}
                />
        </div>
    );
}