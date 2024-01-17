import { useEffect, useState } from "react";

export default function QuestionTimer({timeout, onTimeout, mode})
{
    const  [remainingTime,setRememainingTime] = useState(timeout);
    
    useEffect(() => {
      const timer = setTimeout(onTimeout,timeout);
      return () => {
        clearTimeout(timer);
      }
    },[onTimeout,timeout]); 

    useEffect(() => {
        const interval = setInterval(() => {
           setRememainingTime( prevTime=> prevTime - 100)
        },100)

        return () => {
            clearInterval(interval)
        }
    },[]); 

    return  <progress  id="question-time" value={remainingTime} max={timeout} className={mode}/>
}