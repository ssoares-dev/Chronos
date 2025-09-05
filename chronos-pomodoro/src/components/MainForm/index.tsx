import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm( ) {

    return (
       <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText={"Task"}
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
    );
    }
    