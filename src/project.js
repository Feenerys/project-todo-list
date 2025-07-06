export class Project {
  constructor(title) {
    this.title = title;
    this._tasks = [];
  }

  set title(title) {
    if (title == "")
      throw new Error("Project must have a valid non-empty title!");
    this._title = title;
  }

  get title() {
    return this._title;
  }

  addTask(task) {
    this._tasks.push(task);
  }

  get tasks() {
    return this._tasks;
  }
}
