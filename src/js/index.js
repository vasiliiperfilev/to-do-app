import "../styles/index.css";
import { createController } from "./controller";
import { createProject } from "./project-object";

function createStartPage() {
    const projectWindow = document.querySelector(".content");
    const controller = createController(projectWindow);
   
    const projectList = document.querySelector(".list.project");
    controller.setListEventListeners(projectList, createProject, controller.setupProjectListeners);
}

createStartPage();