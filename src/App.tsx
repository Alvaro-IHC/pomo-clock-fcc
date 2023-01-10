import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Label } from "./components/atoms/Label/Label";
import { Length } from "./components/molecules/Length/Length";
import { Clock } from "./components/molecules/Clock/Clock";
import { Ctrls } from "./components/molecules/Ctrls/Ctrls";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Label id='title' className='title'>
        25 + 5 Clock
      </Label>
      <Length type='break' value={5} />
      <Length type='session' value={25} />
      <Clock type='session'>{"25:00"}</Clock>
      <Ctrls />
    </div>
  );
}

export default App;
