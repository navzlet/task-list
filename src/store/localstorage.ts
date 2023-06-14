import task from "./task";
import { makeAutoObservable } from "mobx";

class LocalStorage {
  taskList: Array<Ttask> = [];
  getId() {
    if (localStorage.getItem("taskId") === null) {
      localStorage.setItem("taskId", "0");
      return 0;
    } else {
      let taskId = JSON.parse(localStorage.getItem("taskId")!) + 1;
      localStorage.setItem("taskId", JSON.stringify(taskId));
      return taskId;
    }
  }

  getTaskList() {
    if (localStorage.getItem("taskList") == null) {
      localStorage.setItem("taskList", JSON.stringify(this.taskList));
    } else {
      this.taskList = JSON.parse(localStorage.getItem("taskList")!);
    }
    return this.taskList;
  }

  addTask(name: string, content: string) {
    let id = this.getId();
    this.taskList.push({
      id: id,
      name: name,
      content: content,
      isSelected: false,
      subtasks: false,
    });
    localStorage.setItem("taskList", JSON.stringify(this.taskList));
  }

  addSubtask(name: string, content: string, parTaskId: number) {
    let id = this.getId();
    let subtaskObj = {
      id: id,
      name: name,
      content: content,
      isSelected: false,
      subtasks: false,
    };
    const iterateArr = function (taskList: any) {
      for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id === parTaskId) {
          if (taskList[i].subtasks !== false) {
            taskList[i].subtasks.push(subtaskObj);
          } else {
            taskList[i].subtasks = [subtaskObj];
          }
        } else {
          iterateArr(taskList[i].subtasks);
        }
      }
    };

    iterateArr(this.taskList);
    localStorage.setItem("taskList", JSON.stringify(this.taskList));
  }

  deleteTasks() {
    const iterateArr = function (taskList: any) {
      for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].subtasks !== false) {
          iterateArr(taskList[i].subtasks);
          if (taskList[i].subtasks.length === 0) {
            taskList[i].subtasks = false;
          }
        }
        if (taskList[i].isSelected === true) {
          taskList.splice(i, 1);
          iterateArr(taskList);
        }
      }
    };
    iterateArr(this.taskList);
    localStorage.setItem("taskList", JSON.stringify(this.taskList));
    task.displayingTask = null;
  }

  selectTasks(id: number) {
    let iterateTaskList = function (tasksList: Array<Ttask>, id: number) {
      let action = function (task: Ttask, id: number) {
        if (task.id === id) {
          task.isSelected
            ? (task.isSelected = false)
            : (task.isSelected = true);
          if (task.subtasks && task.isSelected) {
            taskAction(task.subtasks);
          }
        }
      };

      let taskAction = function (tasks: Array<Ttask>) {
        tasks.map((el) => {
          el.isSelected = true;
          if (el.subtasks) {
            taskAction(el.subtasks);
          }
        });
      };

      let currTask = function (task: Ttask, id: number) {
        if (task.subtasks) {
          action(task, id);
          iterateTaskList(task.subtasks, id);
        } else {
          action(task, id);
        }
      };

      tasksList.map((el) => currTask(el, id));
    };
    iterateTaskList(this.taskList, id);
    localStorage.setItem("taskList", JSON.stringify(this.taskList));
  }
  constructor() {
    makeAutoObservable(this);
  }
}

export default new LocalStorage();
