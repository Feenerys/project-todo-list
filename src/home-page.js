import "./styles.css";

export const homePage = (projects) => {
  projectSection(projects);
};

const projectSection = (projects) => {
  const container = document.querySelector(".project-container");
  for (let project of projects) {
    const projectItem = document.createElement("div");
    projectItem.className = "project";
    projectItem.textContent = project.title;
    container.appendChild(projectItem);
  }
};
