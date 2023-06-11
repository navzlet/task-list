import React from "react";
import { TaskList } from "../taskList/taskList";
import task from "../../store/task";
import { observer } from "mobx-react-lite";
import "./list.scss";

export const List = observer(() => {
  return (
    <div className="list">
      <TaskList task={task.taskList} />
      <button onClick={() => task.addTask("test", "test")}>Add new task</button>
    </div>
  );
});
