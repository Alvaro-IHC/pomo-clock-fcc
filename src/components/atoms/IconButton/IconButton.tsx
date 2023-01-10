import { IIconButton } from "../../../utils/helpers/interfaces";
import "./styles.css";

export const IconButton = ({ children }: IIconButton) => {
  return <div className='icon-btn'>{children}</div>;
};
