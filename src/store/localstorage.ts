let taskList: Array<Ttask> = [];

class LocalStorage {
  testid: number = 0;
  getId() {
    if (localStorage.getItem("taskId") == null) {
      localStorage.setItem("taskId", "9");
      return 9;
    } else {
      let taskId = JSON.parse(localStorage.getItem("taskId")!) + 1;
      localStorage.setItem("taskId", JSON.stringify(taskId));
      return taskId;
    }
  }

  getTaskList() {
    if (localStorage.getItem("taskList") == null) {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    } else {
      taskList = JSON.parse(localStorage.getItem("taskList")!);
    }
    return taskList;
  }
}

export default new LocalStorage();
