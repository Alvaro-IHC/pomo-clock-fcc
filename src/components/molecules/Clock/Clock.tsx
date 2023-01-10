import { IClock } from "../../../utils/helpers/interfaces";
import { Label } from "../../atoms/Label/Label";
import "./styles.css";

export const Clock = ({ type, children }: IClock) => {
  return (
    <div className='clock'>
      <Label id='clock-title'>{type}</Label>
      <Label id='clock-time'>{children}</Label>
    </div>
  );
};
