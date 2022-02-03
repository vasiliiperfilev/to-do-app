import "../styles/index.css";
import { createProjectController } from "./project-controller";
import { createProject } from "./project-object";

function createStartPage() {
    const projectWindow = document.querySelector(".content");
    const controller = createProjectController(projectWindow);
   
    const projectList = document.querySelector(".list.project");
    controller.setListEventListeners(projectList, createProject, controller.setupProjectListeners);
}

createStartPage();