import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";

import "./styles/global.css";
import "./styles/theme.css";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";



export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText="Task"
              id="task"
              placeholder="Enter task"
              type="text"
            />
          </div>

          <div className="formRow">
            <p>Duration</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton
              id="submit"
              type="submit"
              icon={<PlayCircleIcon />}
              color="green"
            />
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
