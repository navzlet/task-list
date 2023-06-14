import React from "react";
import "./taskContent.scss";
import task from "../../store/task";
import { observer } from "mobx-react-lite";
import modal from "../../store/modal";

interface ITaskContent {
  openModal: () => void;
}

export const TaskContent = observer((props: ITaskContent) => {
  return (
    <div className="taskContent">
      {task.displayingTask ? (
        <div>
          <div>{task.displayingTask?.name}</div>
          <div>{task.displayingTask?.content}</div>
          <button
            onClick={() => {
              modal.actionContext = "add_subtask";
              modal.taskName = "";
              modal.taskContent = "";
              modal.id = task.displayingTask?.id;
              modal.modalHeader = "Add new subtask";
              props.openModal();
            }}
          >
            Add new subtask
          </button>
        </div>
      ) : (
        <div>select task</div>
      )}
    </div>
  );
});
