export const RenderPage = (projects) => {
  for (let project of projects) {
    renderProject(project);
  }

  for (let task of projects[0].tasks) {
    renderTask(task);
  }
};

export const renderProject = (project) => {
  const projectContainer = document.querySelector(".project-container");

  const projectItem = document.createElement("div");
  projectItem.className = "project";
  projectItem.textContent = project.title;

  projectItem.addEventListener("click", () => {
    resetAllTasks();
    for (let task of project.tasks) {
      renderTask(task);
    }
  });

  projectContainer.appendChild(projectItem);
};

const renderTask = (task) => {
  const taskContainer = document.querySelector(".task-container");

  const taskItem = document.createElement("div");
  taskItem.className = "task";

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
  taskEditBtn.textContent = "Edit";
  const taskEditDialog = renderTaskEdit();
  taskEditBtn.addEventListener("click", () => {
    taskEditDialog.showModal();
  });

  taskItem.appendChild(taskEditBtn);
  taskItem.appendChild(taskEditDialog);

  taskContainer.appendChild(taskItem);
};

const resetAllTasks = () => {
  const taskContainer = document.querySelector(".task-container");
  taskContainer.innerHTML = "";
};

const renderTaskEdit = () => {
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
  return dialog;
};
