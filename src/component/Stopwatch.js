import React, { useEffect, useState } from 'react'
import './StopwatchStyle.css'

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((time) => time + 10);
        }, 10);
      } else {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);

  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
        <span>:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div className="buttons">
        <button className="btn start" onClick={() => setRunning(true)}>
          Start
        </button>
        <button className="btn stop" onClick={() => setRunning(false)}>
          Stop
        </button>
        <button className="btn reset" onClick={() => setTime(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch