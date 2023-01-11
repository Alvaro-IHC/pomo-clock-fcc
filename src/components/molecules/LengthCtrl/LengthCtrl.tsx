import { ILengthCtrl } from "../../../utils/interfaces";
import { IconButton } from "../../atoms/IconButton/IconButton";
import { Label } from "../../atoms/Label/Label";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import "./styles.css";
import { useContext } from "react";
import { StateContext } from "../../../App";

export const LengthCtrl = ({ type, value, min = 1, max = 60 }: ILengthCtrl) => {
  const { active, setBreakValue, setSessionValue } = useContext(StateContext);
  const incrementLength = () => {
    if (active) return;
    if (type === "break") {
      setBreakValue((previous: number) =>
        previous + 1 > max ? previous : previous + 1
      );
    } else {
      setSessionValue((previous: number) =>
        previous + 1 > max ? previous : previous + 1
      );
    }
  };

  const decrementLength = () => {
    if (active) return;
    if (type === "break") {
      setBreakValue((previous: number) =>
        previous - 1 < min ? previous : previous - 1
      );
    } else {
      setSessionValue((previous: number) =>
        previous - 1 < min ? previous : previous - 1
      );
    }
  };

  return (
    <div className='length-ctrl'>
      <IconButton id={`${type}-decrement`} onClick={decrementLength}>
        <AiOutlineArrowDown />
      </IconButton>
      <Label id={`${type}-length`} className='ctrl-label'>
        {value.toString()}
      </Label>
      <IconButton id={`${type}-increment`} onClick={incrementLength}>
        <AiOutlineArrowUp />
      </IconButton>
    </div>
  );
};
