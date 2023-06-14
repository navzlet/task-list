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
    <div>
      {task.displayingTask ? (
        <div className="taskContent">
          <div className="taskContent__content">
            <div className="taskContent__header">Task name:</div>
            <div className="taskContent__name">{task.displayingTask?.name}</div>
            <div className="taskContent__header">Task content:</div>
            <div className="taskContent__content">
              {task.displayingTask?.content}
            </div>
          </div>
          <div className="taskContent__buttons">
            <button
              className="taskContent__button"
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
        </div>
      ) : (
        <div className="taskContent">Select task!</div>
      )}
    </div>
  );
});
