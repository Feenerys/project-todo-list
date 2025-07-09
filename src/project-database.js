import { Project } from "./project";

export class ProjectDatabase {
  constructor(projects) {
    if (projects.length === 0) {
      const defaultProject = new Project("Inbox");
      this.projects = [defaultProject];
      this.currentProject = defaultProject;
    } else {
      this.projects = projects;
      this.currentProject = projects[0];
    }
    
  }

  newProject(title) {
    this._projects.push(new Project(title));
  }

  removeProject(project) {
    this._projects = this._projects.filter((n) => n.id != project.id);
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
}
