import { makeAutoObservable } from "mobx";

class Task {
  taskList: any = [
    {
      name: "task1",
      id: 1,
      content: "task1Content",
      subtasks: false,
    },
    {
      name: "task2",
      id: 2,
      content: "task2Content",
      subtasks: [
        {
          name: "task2.1",
          id: 3,
          content: "taskContent",
          subtasks: false,
        },
        {
          name: "task2.2",
          id: 4,
          content: "taskContent",
          subtasks: [
            {
              name: "task2.2.1",
              id: 3,
              content: "taskContent",
              subtasks: false,
            },
            {
              name: "task2.2.2",
              id: 3,
              content: "taskContent",
              subtasks: false,
            },
          ],
        },
      ],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Task();
