import { HiPlayPause } from "react-icons/hi2";
import { FiRefreshCcw } from "react-icons/fi";
import { IconButton } from "../../atoms/IconButton/IconButton";
import "./styles.css";
import { useContext } from "react";
import { StateContext } from "../../../App";

export const Ctrls = () => {
  const {
    active,
    setActive,
    setBreakValue,
    setSessionValue,
    setTimeCounter,
    startTimer,
    intervalID,
  } = useContext(StateContext);

  const handlePlayPause = () => {
    if (active) {
      clearInterval(intervalID.current);
      setTimeCounter((previous) => previous + 1);
    } else {
      startTimer();
    }
    setActive((previous) => !previous);
  };

  const handleReset = () => {
    if (active) {
      clearInterval(intervalID.current);
    }
    const audio = document.getElementById("beep") as HTMLAudioElement | null;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setActive(false);
    setBreakValue(5);
    setSessionValue(25);
    setTimeCounter(25 * 60);
  };

  return (
    <div className='ctrls'>
      <IconButton id='start_stop' onClick={handlePlayPause}>
        <HiPlayPause />
      </IconButton>
      <IconButton id='reset' onClick={handleReset}>
        <FiRefreshCcw />
      </IconButton>
    </div>
  );
};
