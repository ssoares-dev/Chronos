import { Home } from "./Pages/Home";
/* import { NotFound } from "./Pages/NotFound";
import { AboutPomodoro } from "./Pages/AboutPomodoro"; */

import { useState } from "react";

import "./styles/global.css";
import "./styles/theme.css";
import type { TaskStateModel } from "./models/TaskStateModel";
import { TaskContextProvider } from "./Contexts/TaskContext";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};


export function App() {

  const [state, setState] = useState(initialState);

  return(
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}

export default App;
