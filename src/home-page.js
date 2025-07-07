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
  taskEditBtn.addEventListener("click", () => {
    renderTaskEdit();
  });

  taskItem.appendChild(taskEditBtn);

  taskContainer.appendChild(taskItem);
};

const resetAllTasks = () => {
  const taskContainer = document.querySelector(".task-container");
  taskContainer.innerHTML = "";
};

const renderTaskEdit = () => {};
