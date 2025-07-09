import { Project } from "./project";
import { Task } from "./task";

export class ProjectDatabase {
  constructor(projects = this.loadProjects()) {
    this.projects = projects.length === 0 ? [new Project("Inbox")] : projects;
    this.currentProject = this.projects[0];
  }

  newProject(title) {
    this._projects.push(new Project(title));
  }

  removeProject(project) {
    this.projects = this.projects.filter((p) => {
      return p.id !== project.id;
    });
    if (this.currentProject == project) {
      this.currentProject = this._projects[0];
    }
    console.log(this.projects);
  }

  set currentProject(project) {
    this._currentProject = project;
  }

  get currentProject() {
    return this._currentProject;
  }

  get projects() {
    return this._projects;
  }

  set projects(input) {
    this._projects = input;
  }

  saveProjects() {
    localStorage.setItem(
      "projects",
      JSON.stringify(this.projects.map((p) => p.toJSON())),
    );
  }

  loadProjects() {
    const projectData = JSON.parse(localStorage.getItem("projects"));

    return projectData
      ? projectData.map((project) => {
          const newProject = new Project(project.title);
          newProject.importTasks(
            project.tasks.map((t) => {
              const task = new Task(
                t.title,
                t.dueDate,
                t.priority,
                t.description,
                t.status,
              );
              return task;
            }),
          );
          // console.log(newProject)
          return newProject;
        })
      : [];
  }
}
