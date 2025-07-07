import "./styles.css";
import { Task } from "./task";
import { Project } from "./project";
import {  RenderPage } from "./home-page";

console.log("Hello World");

const newTask = new Task("First Task", "12/7/2025");
const defaultProject = new Project("Inbox");
const newProject = new Project("Project 2");

defaultProject.addTask(newTask);


const projects = [defaultProject, newProject];
RenderPage(projects);
