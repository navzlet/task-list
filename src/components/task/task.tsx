import React from "react";
import { TaskList } from "../taskList/taskList";
import "./task.scss";

export const Task = ({ task }: any) => {
  return (
    <div className="task">
      <div className="task__icon">:)</div>
      <div className="task__checkbox"></div>
      <div className="task__name">{task.name}</div>
      {task.subtasks && <TaskList task={task.subtasks} />}
    </div>
  );
};
