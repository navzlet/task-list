import React from "react";
import { Task } from "../task/task";
import task from "../../store/task";
import { observer } from "mobx-react-lite";

export const List = observer(() => {
  return (
    <div>
      {task.taskList.map((el: any) => {
        return <Task task={el} />;
      })}
    </div>
  );
});
