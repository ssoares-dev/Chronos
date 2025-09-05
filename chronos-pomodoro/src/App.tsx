import { TaskContextProvider } from "./Contexts/TaskContext/taskContextProvider";
import { Home } from "./Pages/Home";
/* import { NotFound } from "./Pages/NotFound";
import { AboutPomodoro } from "./Pages/AboutPomodoro"; */
import "./styles/global.css";
import "./styles/theme.css";

export function App() {

  return(
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}

export default App;
