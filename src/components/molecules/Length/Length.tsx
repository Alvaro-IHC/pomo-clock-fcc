import { ILength } from "../../../utils/helpers/interfaces";
import { Label } from "../../atoms/Label/Label";
import { LengthCtrl } from "../LengthCtrl/LengthCtrl";
import "./styles.css";

export const Length = ({ type, value }: ILength) => {
  return (
    <div className={`${type}-length-container`}>
      <Label id={`${type}-label`}>{`${type} length`}</Label>
      <LengthCtrl type={type} value={value} />
    </div>
  );
};
