export class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  set title(title) {
    if (title == "")
      throw new Error("Project must have a valid non-empty title!");
    this._title = title;
  }
  get title() {
    return this._title;
  }
}
