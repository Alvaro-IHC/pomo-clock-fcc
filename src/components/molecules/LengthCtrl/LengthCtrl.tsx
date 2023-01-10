import { ILengthCtrl } from "../../../utils/helpers/interfaces";
import { IconButton } from "../../atoms/IconButton/IconButton";
import { Label } from "../../atoms/Label/Label";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import "./styles.css";

export const LengthCtrl = ({ type, value }: ILengthCtrl) => {
  return (
    <div className='length-ctrl'>
      <IconButton>
        <AiOutlineArrowDown />
      </IconButton>
      <Label id={`${type}-length`}>{value.toString()}</Label>
      <IconButton>
        <AiOutlineArrowUp />
      </IconButton>
    </div>
  );
};
