import React, { Children, useState } from "react";
import { observer } from "mobx-react-lite";
import "./taskList.scss";
import { Task } from "../task/task";

interface Itask {
  name: string;
  id: number;
  content: string;
  subtask: boolean | Array<Itask>;
}

export const TaskList = observer(({ task }: any) => {
  // const [subTasks, setSubTasks] = useState(task.subtasks);
  // const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="task">
      {task.map((el: any) => {
        return <Task task={el} />;
      })}
    </div>
  );
});
