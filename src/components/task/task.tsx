import React, { useState } from "react";
import { TaskList } from "../taskList/taskList";
import "./task.scss";
import TaskIcon from "../../assets/taskIcon";

interface ItaskProps {
  task: Ttask;
}

export const Task: React.FC<ItaskProps> = ({ task }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={task.isSelected ? "task task_selected" : "task"}>
      <div className="task__content">
        {/* <div className="task__checkbox"></div> */}
        {task.subtasks && (
          <TaskIcon
            onClick={() => (isOpened ? setIsOpened(false) : setIsOpened(true))}
            className={isOpened ? "icon_opened" : ""}
          />
        )}
        <div className="task__name">{task.name}</div>
      </div>
      <div
        className={
          isOpened ? "task__subtasksList" : "task__subtasksList_closed"
        }
      >
        {task.subtasks && <TaskList task={task.subtasks} />}
      </div>
    </div>
  );
};
