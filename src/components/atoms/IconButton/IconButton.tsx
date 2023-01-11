import { IIconButton } from "../../../utils/interfaces";
import "./styles.css";

export const IconButton = ({ id, children, onClick }: IIconButton) => {
  return (
    <div id={id} className='icon-btn' onClick={onClick}>
      {children}
    </div>
  );
};
