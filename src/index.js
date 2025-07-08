import "./styles.css";
import { Task } from "./task";
import { Project } from "./project";
import { RenderPage as RenderHomePage, renderTask } from "./home-page";

console.log("Hello World");

const newTask = new Task("First Task", "2025-07-08");
const defaultProject = new Project("Inbox");
const newProject = new Project("Project 2");

defaultProject.addTask(newTask);

const projects = [defaultProject, newProject];
const currentProjectId = defaultProject.id;
RenderHomePage(projects, currentProjectId);

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

  addNewTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = new Task(
      newTaskTitle.value,
      newTaskDueDate.value,
      newTaskPriority.value,
      newTaskDesc.value,
    );
    defaultProject.addTask(task);
    addTaskDialog.close();
    renderTask(task);
  });
};

addTaskBtn();

const addProjectBtn = document.querySelector(".add-project-btn");
const addProjectDialog = document.querySelector(".add-project");
const closeProjectDialog = document.querySelector(".close-new-project");
addProjectBtn.addEventListener("click", () => {
  addProjectDialog.showModal();
});

closeProjectDialog.addEventListener("click", () => {
  addProjectDialog.close();
});
