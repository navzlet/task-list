import React from "react";
import { observer } from "mobx-react-lite";
import "./taskList.scss";
import { Task } from "../task/task";

interface ITaskListProps {
  task: Array<Ttask>;
}

export const TaskList: React.FC<ITaskListProps> = observer(({ task }) => {
  return (
    <div className="taskList">
      {task.map((el: Ttask) => {
        return <Task key={el.id} task={el} />;
      })}
    </div>
  );
});
