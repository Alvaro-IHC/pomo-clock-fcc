import { HiPlayPause } from "react-icons/hi2";
import { FiRefreshCcw } from "react-icons/fi";
import { IconButton } from "../../atoms/IconButton/IconButton";
import "./styles.css";

export const Ctrls = () => {
  return (
    <div className='ctrls'>
      <IconButton>
        <HiPlayPause />
      </IconButton>
      <IconButton>
        <FiRefreshCcw />
      </IconButton>
    </div>
  );
};
