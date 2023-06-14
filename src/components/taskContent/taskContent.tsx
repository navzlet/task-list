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
      <div>{task.displayingTask?.name}</div>
      <div>{task.displayingTask?.content}</div>
      <button
        onClick={() => {
          modal.actionContext = "add_subtask";
          modal.taskName = "test";
          modal.taskContent = "test";
          modal.id = 7;
          modal.modalHeader = "Add new subtask";
          props.openModal();
        }}
      >
        Add new subtask
      </button>
    </div>
  );
});
