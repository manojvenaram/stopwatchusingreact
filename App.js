import {useState,useRef} from "react";
import './App.css';

function App() {
  const [time , setTime] = useState(null);
  const [now,setNow]=useState(null);

  const intervalRef = useRef(null);
  const [diff,setDiff]=useState(0);
  // const [first,setFirst]=useState(0);
  const handleStart=()=>{

    setTime(Date.now());
    setNow(Date.now()-diff);
    intervalRef.current=setInterval(() => {
      setTime(Date.now());
    },10);
    
  };

  const handleStop=()=> {
    setDiff(time-now);
    clearInterval(intervalRef.current);
  }

  const handleReset=()=>{
    setTime(Date.now());
    setNow(Date.now());
    setDiff(0);
    clearInterval(intervalRef.current);
  }

    let timePassed =(time-now);
    let timeMinute=Math.floor(timePassed / (1000*60)%60);
    let timeSecond=Math.floor(timePassed/ (1000)%60);
    let millisecond=Math.floor((timePassed% 1000)/10);

    let minute=String(timeMinute).padStart(2,'0');
    let second=String(timeSecond).padStart(2,'0');
    let milli=String(millisecond).padStart(2,'0');
  return (
    <div className="App">
      <h1>StopWatch</h1>
      <h2>Timer:{minute}:{second}:{milli}</h2>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;