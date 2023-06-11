import React, { useState } from "react";
import { TaskList } from "../taskList/taskList";
import "./task.scss";
import StoreTask from "../../store/task";
import { observer } from "mobx-react-lite";
import TaskIcon from "../../assets/taskIcon";
import Checkbox_selected from "../../assets/checkbox_selected";
import Checkbox_notSelected from "../../assets/checkbox_notSelected";

interface ItaskProps {
  task: Ttask;
}

export const Task: React.FC<ItaskProps> = observer(({ task }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={task.isSelected ? "task task_selected" : "task"}>
      <div
        className="task__content"
        onClick={() => StoreTask.setDisplayingTask(task)}
      >
        {task.subtasks && (
          <TaskIcon
            onClick={() => (isOpened ? setIsOpened(false) : setIsOpened(true))}
            className={isOpened ? "icon_opened" : ""}
          />
        )}
        <div
          className={task.subtasks ? "task__checkbox" : "task__checkbox ml16"}
          onClick={() => StoreTask.selectTasks(task.id)}
        >
          {task.isSelected ? <Checkbox_selected /> : <Checkbox_notSelected />}
        </div>
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
});
