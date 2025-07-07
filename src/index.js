import "./styles.css";
import { Task } from "./task";
import { Project } from "./project";
import { homePage as RenderPage } from "./home-page";

console.log("Hello World");

const newTask = new Task("ad", "12/7/2025");
const defaultProject = new Project("inbox");
defaultProject.addTask(newTask);
defaultProject.removeTask(newTask);

const projects = [defaultProject];
RenderPage(projects);
