import React from "react";
import "./taskContent.scss";
import task from "../../store/task";
import { observer } from "mobx-react-lite";

export const TaskContent = observer(() => {
  return (
    <div className="taskContent">
      <div>{task.displayingTask?.content}</div>
    </div>
  );
});
