import { parse } from "date-fns";

export class Task {
  constructor(
    title,
    dueDate = "",
    priority = "",
    description = "None"
  ) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this._description = description;

    console.log(this.title, this.dueDate);
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

  set dueDate(dueDate) {
    this._dueDate = parse(dueDate, 'dd/MM/yyyy', new Date())
  }

  get dueDate() {
    return this._dueDate;
  }
}
