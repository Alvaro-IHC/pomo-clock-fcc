import React, { useEffect, useRef, useState } from "react";
import { Label } from "./components/atoms/Label/Label";
import { Length } from "./components/molecules/Length/Length";
import { Clock } from "./components/molecules/Clock/Clock";
import { Ctrls } from "./components/molecules/Ctrls/Ctrls";
import { IStateContext } from "./utils/interfaces";
import { getTime } from "./utils/helpers";
import "./App.css";

export const StateContext = React.createContext({} as IStateContext);

function App() {
  const [active, setActive] = useState(false);
  const [breakValue, setBreakValue] = useState(1);
  const [sessionValue, setSessionValue] = useState(1);
  const [timeCounter, setTimeCounter] = useState(sessionValue * 60);
  const [label, setLabel] = useState("session");
  let session = true;
  const intervalID = useRef(0);

  useEffect(() => {
    setTimeCounter(sessionValue * 60);
  }, [sessionValue]);

  const handleTime = (ses: boolean) => {
    setTimeCounter((previous) => {
      if (previous - 1 < 0) {
        const audio = document.getElementById(
          "beep"
        ) as HTMLAudioElement | null;
        audio?.play();
        clearInterval(intervalID.current);
        startTimer();
        if (ses) {
          session = false;
          return breakValue * 60;
        } else {
          session = true;
          return sessionValue * 60;
        }
      }
      return previous - 1;
    });
    setLabel(session ? "session" : "break");
  };

  const startTimer = () => {
    intervalID.current = setInterval(handleTime, 100, session);
  };

  const value = {
    active,
    setActive,
    breakValue,
    setBreakValue,
    sessionValue,
    setSessionValue,
    setTimeCounter,
    startTimer,
    intervalID,
  } as IStateContext;

  return (
    <StateContext.Provider value={value}>
      <div className='App'>
        <Label id='title' className='title'>
          25 + 5 Clock
        </Label>
        <Length type='break' value={breakValue} />
        <Length type='session' value={sessionValue} />
        <Clock type={label}>{getTime(timeCounter)}</Clock>
        <Ctrls />
        <audio
          id='beep'
          className='clip'
          src={"/pomo-clock-fcc/beep.wav"}
        ></audio>
      </div>
    </StateContext.Provider>
  );
}

export default App;
