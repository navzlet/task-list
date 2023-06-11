import { makeAutoObservable } from "mobx";

class Task {
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
      isSelected: true,
      subtasks: [
        {
          name: "task2.1",
          id: 3,
          content: "taskContent",
          isSelected: true,
          subtasks: false,
        },
        {
          name: "task2.2",
          id: 4,
          content: "taskContent",
          isSelected: true,
          subtasks: [
            {
              name: "task2.2.1",
              id: 5,
              content: "taskContent",
              isSelected: true,
              subtasks: false,
            },
            {
              name: "task2.2.2",
              id: 6,
              content: "cheezeee",
              isSelected: true,
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

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Task();
