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
    let thisTaskList = this.taskList;
    let removeTasks = function (id: number) {
      let iterateRemovedTasks = function (arr: Array<Ttask>, id: number) {
        let remove = function (task: Ttask, id: number) {
          if (task.id === id) {
            task.isSelected = false;
          }
        };

        let currRemove = function (task: Ttask, id: number) {
          if (task.subtasks) {
            idArr.push(task.id);
            remove(task, id);
            iterateRemovedTasks(task.subtasks, id);
          } else {
            remove(task, id);
          }
        };

        arr.map((el: Ttask) => {
          currRemove(el, id);
        });
      };
      iterateRemovedTasks(thisTaskList, id);
    };
    let idArr: Array<number> = [];
    let iterateTaskList = function (tasksList: Array<Ttask>, id: number) {
      let action = function (task: Ttask, id: number) {
        if (task.id === id) {
          if (task.isSelected) {
            task.isSelected = false;
            idArr.map((el) => {
              removeTasks(el);
            });
          } else task.isSelected = true;
          if (task.subtasks) {
            taskAction(task.subtasks, task.isSelected);
          }
        }
      };

      let taskAction = function (tasks: Array<Ttask>, selectionFlag: boolean) {
        tasks.map((el) => {
          el.isSelected = selectionFlag;
          if (el.subtasks) {
            taskAction(el.subtasks, selectionFlag);
          }
        });
      };

      let currTask = function (task: Ttask, id: number) {
        if (task.subtasks) {
          idArr.push(task.id);
          action(task, id);
          iterateTaskList(task.subtasks, id);
        } else {
          action(task, id);
          idArr = [];
        }
      };

      tasksList.map((el) => {
        currTask(el, id);
      });
    };
    iterateTaskList(thisTaskList, id);
    localStorage.setItem("taskList", JSON.stringify(this.taskList));
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default new LocalStorage();
