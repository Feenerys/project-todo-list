export const RenderPage = (projects) => {
  renderProjects(projects);

  for (let task of projects[0].tasks){
    renderTask(task);
  }
};

const renderProjects = (projects) => {
  const projectContainer = document.querySelector(".project-container");

  for (let project of projects) {
    const projectItem = document.createElement("div");
    projectItem.className = "project";
    projectItem.textContent = project.title;

    projectItem.addEventListener("click", () => {
      resetAllTasks()
      for (let task of project.tasks) {
        renderTask(task);
      }
    });

    projectContainer.appendChild(projectItem);
  }
};

const renderTask = (task) => {
  const taskContainer = document.querySelector(".task-container");

  const taskItem = document.createElement("div");
  taskItem.className = "task";
  taskItem.textContent = task.title;  

  taskContainer.appendChild(taskItem);
};

const resetAllTasks = () => {
  const taskContainer = document.querySelector(".task-container");
  taskContainer.innerHTML = "";
}
