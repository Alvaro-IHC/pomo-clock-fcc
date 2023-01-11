import { ILabel } from "../../../utils/interfaces";
import "./styles.css";

export const Label = ({ id, className, children }: ILabel) => {
  return (
    <div id={id} className={`label${className ? " " + className : ""}`}>
      {children}
    </div>
  );
};
