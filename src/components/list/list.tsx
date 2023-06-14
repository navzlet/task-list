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
      <div className="list__content">
        {task.taskList.length ? (
          <TaskList task={task.taskList} />
        ) : (
          <div>Add some tasks!</div>
        )}
      </div>
      <div className="list__buttons">
        <button
          className="list__button"
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
        <button className="list__button" onClick={() => task.deleteTasks()}>
          Delete selected tasks
        </button>
      </div>
    </div>
  );
});
