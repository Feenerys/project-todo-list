import { format } from "date-fns";

export const RenderPage = (projects, currentProject) => {
  for (let project of projects) {
    renderProject(project);
  }
  
  for (let task of currentProject.tasks) {
    renderTask(task, currentProject);
    // Potential bad practice here where in order to delete task 
    // I have to pass the project into the task element to give to the 
    // task remove function
  }
};

export const renderProject = (project) => {
  const projectContainer = document.querySelector(".project-container");

  const projectItem = document.createElement("button");
  projectItem.className = "project";
  projectItem.textContent = project.title;

  projectItem.addEventListener("click", () => {
    resetAllTasks();
    for (let task of project.tasks) {
      renderTask(task, project);
    }
  });

  projectContainer.appendChild(projectItem);
  return project.id;
};

export const renderTask = (task, project) => {
  const taskContainer = document.querySelector(".task-container");

  const taskItem = document.createElement("div");
  taskItem.className = "task";
  taskItem.dataset.taskId = task.id;

  const taskStatus = document.createElement("input");
  taskStatus.type = "checkbox";
  taskStatus.id = "task-status";
  taskItem.appendChild(taskStatus);
  taskStatus.addEventListener("click", () => {
    task.status = taskStatus.checked;
  });

  const taskTitle = document.createElement("label");
  taskTitle.className = "task-title";
  taskItem.appendChild(taskTitle);

  const taskDueDate = document.createElement("div");
  taskDueDate.className = "task-due-date";
  taskItem.appendChild(taskDueDate);

  taskTitle.htmlFor = "task-status";
  taskTitle.textContent = task.title;
  taskDueDate.textContent = task.dueDate;
  taskStatus.checked = task.status;

  const taskEditBtn = document.createElement("button");
  taskEditBtn.textContent = "Show";
  const taskEditDialog = taskEdit(task, taskEditBtn, project);

  taskItem.appendChild(taskEditDialog);
  taskItem.appendChild(taskEditBtn);

  taskContainer.appendChild(taskItem);
};

const removeTask = (task, project) => {
  const taskItem = document.querySelector(`[data-task-id="${task.id}"]`);
  taskItem.remove();
  project.removeTask(task);
};

const resetAllTasks = () => {
  const taskContainer = document.querySelector(".task-container");
  taskContainer.innerHTML = "";
};

const taskEdit = (task, editButton, project) => {
  const dialog = document.createElement("dialog");
  dialog.className = "edit-task-btn";
  const form = document.createElement("form");
  dialog.appendChild(form);
  const header = document.createElement("h3");
  header.textContent = "Edit Task";
  form.appendChild(header);
  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.textContent = "Close";
  closeButton.autofocus = true;
  closeButton.className = "close-edit-btn";

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  const statusLabel = document.createElement("label");
  statusLabel.textContent = "Status:";
  statusLabel.htmlFor = "task-status-edit";
  form.appendChild(statusLabel);
  const status = document.createElement("input");
  status.type = "checkbox";
  status.name = "status";
  status.id = "task-status-edit";
  form.appendChild(status);

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  titleLabel.htmlFor = "task-title-edit";
  form.appendChild(titleLabel);
  const title = document.createElement("input");
  title.id = "task-title-edit";
  title.name = "title";
  title.required = true;
  form.appendChild(title);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Due Date:";
  dueDateLabel.htmlFor = "task-due-date-edit";
  form.appendChild(dueDateLabel);
  const dueDate = document.createElement("input");
  dueDate.id = "task-due-date-edit";
  dueDate.name = "due-date";
  dueDate.type = "date";
  dueDate.required = true;

  form.appendChild(dueDate);

  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority:";
  priorityLabel.htmlFor = "task-priority-edit";
  form.appendChild(priorityLabel);
  const priority = document.createElement("select");
  priority.id = "task-priority-edit";
  priority.name = "priority";
  const optLow = document.createElement("option");
  const optMed = document.createElement("option");
  const optHigh = document.createElement("option");
  const optNone = document.createElement("option");
  optLow.value = "Low";
  optLow.textContent = "Low";
  optMed.value = "Med";
  optMed.textContent = "Medium";
  optHigh.value = "High";
  optHigh.textContent = "High";
  optNone.value = "";
  optNone.textContent = "None";
  priority.appendChild(optLow);
  priority.appendChild(optMed);
  priority.appendChild(optHigh);
  priority.appendChild(optNone);

  form.appendChild(priority);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description:";
  descriptionLabel.htmlFor = "task-description-edit";
  form.appendChild(descriptionLabel);
  const description = document.createElement("textarea");
  description.id = "task-description-edit";
  description.name = "description";
  form.appendChild(description);

  const saveButton = document.createElement("button");
  saveButton.type = "submit";
  saveButton.className = "task-submit-edit-btn";
  saveButton.textContent = "Save";
  form.appendChild(saveButton);
  form.addEventListener("submit", (event) => {
    task.status = status.checked;
    task.title = title.value;
    task.dueDate = dueDate.value;
    task.priority = priority.value;
    task.description = description.value;
    dialog.close();
    removeTask(task);
    renderTask(task);
    event.preventDefault();
  });

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "task-delete-btn";
  deleteButton.textContent = "Delete";
  form.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    removeTask(task, project);
    dialog.close();
  });

  form.appendChild(closeButton);

  editButton.addEventListener("click", () => {
    status.checked = task.status;
    title.value = task.title;
    dueDate.value = format(task.dueDate, "yyyy-MM-dd");
    priority.value = task.priority;
    description.value = task.description;
    dialog.showModal();
  });

  return dialog;
};
