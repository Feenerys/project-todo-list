import { parse } from "date-fns";

export class Task {
  constructor(title, dueDate = "", priority = "", description = "") {
    this._id = crypto.randomUUID();
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
    this.status = false;
  }

  get id() {
    return this._id;
  }

  get status() {
    return this._status;
  }

  set status(status) {
    if (typeof status != "boolean")
      throw new Error("Task status must be a boolean True or False");
    this._status = status;
  }

  set title(title) {
    if (title == "") throw new Error("You must enter a non empty title!");
    this._title = title;
  }

  get title() {
    return this._title;
  }

  set priority(priority) {
    if (
      priority == "Low" ||
      priority == "Med" ||
      priority == "High" ||
      priority == ""
    ) {
      this._priority = priority;
    } else {
      throw new Error("Priority must be Low, Med, High, or unnassigned");
    }
  }

  get priority() {
    return this._priority;
  }

  set dueDate(dueDate) {
    this._dueDate = parse(dueDate, "yyyy-MM-dd", new Date());
  }

  get dueDate() {
    return this._dueDate;
  }

  set description(description) {
    this._description = description;
  }

  get description() {
    return this._description;
  }
}
