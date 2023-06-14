import { makeAutoObservable } from "mobx";
import LocalStorage from "./localstorage";

class Task {
  displayingTask: Ttask | null = null;
  setDisplayingTask(newTask: Ttask | null) {
    this.displayingTask = newTask;
  }

  taskList = LocalStorage.getTaskList();

  getId() {
    let id = LocalStorage.getId();
    return id;
  }

  addTask(name: string, content: string) {
    if (name === "") {
      alert("Enter task name, please!");
    } else if (content === "") {
      alert("Enter task content, please!");
    } else {
      LocalStorage.addTask(name, content);
    }
  }

  addSubtask(name: string, content: string, parTaskId: number) {
    if (name === "") {
      alert("Enter task name, please!");
    } else if (content === "") {
      alert("Enter task content, please!");
    } else {
      LocalStorage.addSubtask(name, content, parTaskId);
    }
  }

  deleteTasks() {
    LocalStorage.deleteTasks();
  }

  selectTasks(id: number) {
    LocalStorage.selectTasks(id);
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Task();
