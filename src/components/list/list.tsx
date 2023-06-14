import React from "react";
import { TaskList } from "../taskList/taskList";
import task from "../../store/task";
import modal from "../../store/modal";
import { observer } from "mobx-react-lite";
import "./list.scss";

interface IList {
  openModal: () => void;
}

export const List = observer((props: IList) => {
  return (
    <div className="list">
      <TaskList task={task.taskList} />
      <button
        onClick={() => {
          modal.actionContext = "add_task";
          modal.taskName = "";
          modal.taskContent = "";
          modal.modalHeader = "Add new task";
          props.openModal();
        }}
      >
        Add new task
      </button>
      <button onClick={() => task.deleteTasks()}>Delete selected tasks</button>
    </div>
  );
});
