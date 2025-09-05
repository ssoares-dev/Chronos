import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useState } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../Contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";

export function MainForm( ) {
  const {state, setState} = useTaskContext();
  const [taskName,  setTaskName] = useState("");

  const nextCycle = getNextCycle(state.currentCycle);   
  console.log("Next Cycle:", nextCycle);


  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(taskName.trim() === "" && taskName.length === 0) {
      alert("Please enter a task name.");
      return;
    }
    
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      duration: 1,
      type: "workTime",
    };

    const secondsRemaining = newTask.duration * 60; 

    setState(prevState => {
      return {
        ...prevState,
        config: {...prevState.config},
        activeTask: newTask,
        currentCycle: nextCycle, 
        secondsRemaining, // Conferir Depois
        formattedSecondsRemaining: '00:00', // Conferir Depois
        tasks: [...prevState.tasks, newTask],

      }
    });
  }

    return (
       <form className="form" action="" onSubmit={handleCreateNewTask}>
          <div className="formRow">
            <DefaultInput
              labelText={"Task"}
              id="task"
              placeholder="Enter task"
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
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
    