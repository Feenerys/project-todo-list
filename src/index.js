import "./styles.css";
import { Task } from "./task";
import { Project } from "./project";
import { RenderPage } from "./home-page";

console.log("Hello World");

const newTask = new Task("First Task", "12/7/2025");
const defaultProject = new Project("Inbox");
const newProject = new Project("Project 2");

defaultProject.addTask(newTask);

const projects = [defaultProject, newProject];
RenderPage(projects);

const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskDialog = document.querySelector(".add-task");
const closeTaskDialog = document.querySelector(".close-new-task");
addTaskBtn.addEventListener("click", () => {
  addTaskDialog.showModal();
});

closeTaskDialog.addEventListener("click", () => {
  addTaskDialog.close();
});

const addProjectBtn = document.querySelector(".add-project-btn");
const addProjectDialog = document.querySelector(".add-project");
const closeProjectDialog = document.querySelector(".close-new-project");
addProjectBtn.addEventListener("click", () => {
  addProjectDialog.showModal();
});

closeProjectDialog.addEventListener("click", () => {
  addProjectDialog.close();
});
