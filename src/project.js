export class Project {
  constructor(title) {
    this._id = crypto.randomUUID();
    this.title = title;
    this._tasks = [];
  }

  get id() {
    return this._id;
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
    // TODO: add a checker
    this._tasks.push(task);
  }

  get tasks() {
    return this._tasks;
  }

  removeTask(task) {
    // TODO: add a checker if task is valid
    this._tasks = this.tasks.filter((t) => t.id !== task.id);
    console.log(`Removed task: ${task.id}`);
  }

  toJSON() {
    return {
      title: this.title,
      tasks: this.tasks.map((t) => t.toJSON()),
    };
  }

  importTasks(tasks) {
    this._tasks = tasks;
  }
}
