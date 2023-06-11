import React from "react";
import { TaskList } from "../taskList/taskList";
import task from "../../store/task";
import { observer } from "mobx-react-lite";

export const List = observer(() => {
  return (
    <div>
      <TaskList task={task.taskList} />
    </div>
  );
});
