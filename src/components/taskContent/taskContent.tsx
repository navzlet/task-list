import React from "react";
import "./taskContent.scss";
import task from "../../store/task";
import { observer } from "mobx-react-lite";

interface ITaskContent {
  openModal: () => void;
}

export const TaskContent = observer((props: ITaskContent) => {
  return (
    <div className="taskContent">
      <div>{task.displayingTask?.name}</div>
      <div>{task.displayingTask?.content}</div>
      <button onClick={() => props.openModal()}>Add new subtask</button>
    </div>
  );
});
