import quizLogo from "../assets/quiz-logo.png"
export default function Header()
{
    return <header>
        <img src={quizLogo} alt="React Brianteaser Logo"/>
        <h1>React Brainteaser</h1>
    </header>
}