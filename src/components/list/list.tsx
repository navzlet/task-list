import React from "react";
import { TaskList } from "../taskList/taskList";
import task from "../../store/task";
import { observer } from "mobx-react-lite";
import "./list.scss";

interface IList {
  openModal: () => void;
}

export const List = observer((props: IList) => {
  return (
    <div className="list">
      <TaskList task={task.taskList} />
      <button onClick={() => props.openModal()}>Add new task</button>
      <button onClick={() => task.deleteTasks()}>Delete selected tasks</button>
    </div>
  );
});
