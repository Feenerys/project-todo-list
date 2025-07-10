import "./styles.css";
import { Task } from "./task";
import { ProjectDatabase } from "./project-database";
import { RenderPage as RenderHomePage } from "./home-page";

const projectDatabase = new ProjectDatabase();
RenderHomePage(projectDatabase);

const addTaskBtn = () => {
  const openDialogBtn = document.querySelector(".add-task-btn");
  const addTaskDialog = document.querySelector(".add-task");
  const closeTaskDialog = document.querySelector(".close-new-task");

  closeTaskDialog.addEventListener("click", () => {
    addTaskDialog.close();
  });

  const newTaskTitle = document.querySelector("#new-task-title");
  const newTaskDueDate = document.querySelector("#new-task-due-date");
  const newTaskPriority = document.querySelector("#new-task-priority");
  const newTaskDesc = document.querySelector("#new-task-desc");

  openDialogBtn.addEventListener("click", () => {
    newTaskTitle.value = "";
    newTaskDueDate.value = "";
    newTaskPriority.value = "";
    newTaskDesc.value = "";
    addTaskDialog.showModal();
  });

  const addNewTaskForm = document.querySelector(".add-new-task-form");

  addNewTaskForm.addEventListener("submit", () => {
    const task = new Task(
      newTaskTitle.value,
      newTaskDueDate.value,
      newTaskPriority.value,
      newTaskDesc.value,
    );
    projectDatabase.currentProject.addTask(task);
    addTaskDialog.close();
    RenderHomePage(projectDatabase);
    projectDatabase.saveProjects();
  });
};

addTaskBtn();

const addProjectBtn = () => {
  const openDialogBtn = document.querySelector(".add-project-btn");
  const addProjectDialog = document.querySelector(".add-project");
  const closeDialogBtn = document.querySelector(".close-new-project");
  const addProjectForm = document.querySelector(".add-new-project-form");
  const title = document.querySelector("#new-project-title");
  openDialogBtn.addEventListener("click", () => {
    addProjectDialog.showModal();
  });

  closeDialogBtn.addEventListener("click", () => {
    addProjectDialog.close();
  });

  addProjectForm.addEventListener("submit", () => {
    projectDatabase.newProject(title.value);
    addProjectDialog.close();
    RenderHomePage(projectDatabase);
    projectDatabase.saveProjects();
  });
};

addProjectBtn();
