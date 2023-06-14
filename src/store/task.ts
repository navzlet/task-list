import { makeAutoObservable } from "mobx";
import LocalStorage from "./localstorage";

class Task {
  displayingTask: Ttask | null = null;
  setDisplayingTask(newTask: Ttask | null) {
    this.displayingTask = newTask;
  }

  taskList = LocalStorage.getTaskList();
  // getTaskList() {
  //   this.taskList = LocalStorage.getTaskList();
  // }
  // taskList: Array<Ttask> = [
  //   {
  //     name: "task1",
  //     id: 1,
  //     content: "task1Content",
  //     isSelected: false,
  //     subtasks: false,
  //   },
  //   {
  //     name: "task2",
  //     id: 2,
  //     content: "task2Content",
  //     isSelected: false,
  //     subtasks: [
  //       {
  //         name: "task2.1",
  //         id: 3,
  //         content: "taskContent",
  //         isSelected: false,
  //         subtasks: false,
  //       },
  //       {
  //         name: "task2.2",
  //         id: 4,
  //         content: "taskContent",
  //         isSelected: false,
  //         subtasks: [
  //           {
  //             name: "task2.2.1",
  //             id: 5,
  //             content: "taskContent",
  //             isSelected: false,
  //             subtasks: false,
  //           },
  //           {
  //             name: "task2.2.2",
  //             id: 6,
  //             content: "cheezeee",
  //             isSelected: false,
  //             subtasks: false,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     name: "task3",
  //     id: 7,
  //     content: "task3Content",
  //     isSelected: false,
  //     subtasks: [
  //       {
  //         name: "task3.1",
  //         id: 8,
  //         content: "task1Content",
  //         isSelected: false,
  //         subtasks: false,
  //       },
  //     ],
  //   },
  // ];

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
      // console.log(name, content, parTaskId);
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
