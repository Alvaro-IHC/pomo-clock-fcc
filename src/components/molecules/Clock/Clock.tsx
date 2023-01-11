import { IClock } from "../../../utils/interfaces";
import { Label } from "../../atoms/Label/Label";
import "./styles.css";

export const Clock = ({ type, children }: IClock) => {
  return (
    <div className='clock'>
      <Label id='timer-label'>{type}</Label>
      <Label id='time-left'>{children}</Label>
    </div>
  );
};
