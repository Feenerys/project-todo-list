export class Task {
  constructor(
    title,
    dueDate = "",
    description = "None",
    priority = "",
    notes = "None"
  ) {
    this.title = title;
    this._description = description;
    this._dueDate = dueDate;
    this.priority = priority;
    this._notes = notes;

    console.log(this.title, this._dueDate);
  }

  set title(title) {
    if (title == "") throw new Error("You must enter a non empty title!");
    this._title = title;
  }

  get title() {
    return this._title;
  }

  set priority(priority) {
    if (priority == "Low" || priority == "Med" || priority == "High" || priority == "") {
      this._priority = priority;
    } else {
      throw new Error("Priority must be Low, Med, High, or unnassigned");
    }
  }

  get priority() {
    return this._priority;
  }
}
