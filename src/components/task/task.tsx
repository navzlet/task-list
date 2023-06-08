import React from "react";
import { observer } from "mobx-react-lite";

interface Itask {
  name: string;
  id: number;
  content: string;
  subtask: boolean | Array<Itask>;
}

export const Task = observer(({ task }: any) => {
  return (
    <div className="task">
      <div className="task__icon"></div>
      <div className="task__checkbox"></div>
      <div className="task__name">{task.name}</div>
    </div>
  );
});
