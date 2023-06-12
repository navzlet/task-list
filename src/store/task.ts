import { makeAutoObservable } from "mobx";

class Task {
  displayingTask: Ttask | null = null;
  setDisplayingTask(newTask: Ttask) {
    this.displayingTask = newTask;
  }

  taskList: Array<Ttask> = [
    {
      name: "task1",
      id: 1,
      content: "task1Content",
      isSelected: false,
      subtasks: false,
    },
    {
      name: "task2",
      id: 2,
      content: "task2Content",
      isSelected: false,
      subtasks: [
        {
          name: "task2.1",
          id: 3,
          content: "taskContent",
          isSelected: false,
          subtasks: false,
        },
        {
          name: "task2.2",
          id: 4,
          content: "taskContent",
          isSelected: false,
          subtasks: [
            {
              name: "task2.2.1",
              id: 5,
              content: "taskContent",
              isSelected: false,
              subtasks: false,
            },
            {
              name: "task2.2.2",
              id: 6,
              content: "cheezeee",
              isSelected: false,
              subtasks: false,
            },
          ],
        },
      ],
    },
    {
      name: "task3",
      id: 7,
      content: "task3Content",
      isSelected: false,
      subtasks: [
        {
          name: "task3.1",
          id: 8,
          content: "task1Content",
          isSelected: false,
          subtasks: false,
        },
      ],
    },
  ];

  getId() {
    return 111;
  }

  addTask(name: string, content: string) {
    this.taskList.push({
      id: this.getId(),
      name: name,
      content: content,
      isSelected: false,
      subtasks: false,
    });
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
  }

  selectTasks(id: number) {
    let iterateTaskList = function (tasksList: Array<Ttask>, id: number) {
      let action = function (task: Ttask, id: number) {
        if (task.id === id) {
          //для задачи
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
          //для подзадач
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
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Task();
