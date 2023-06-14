import { makeAutoObservable } from "mobx";
import task from "./task";

class Modal {
  modalHeader: string = "";
  actionContext: string = "";
  taskName: string = "";
  taskContent: string = "";
  id?: number;

  modalAction = () => {
    if (this.actionContext === "add_task") {
      task.addTask(this.taskName, this.taskContent);
    } else if (
      this.actionContext === "add_subtask" &&
      typeof this.id == "number"
    ) {
      task.addSubtask(this.taskName, this.taskContent, this.id);
    }
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Modal();
