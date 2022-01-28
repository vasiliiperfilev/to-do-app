import "../styles/index.css";
import { createController } from "./controller";
import { createProject } from "./project-object";

function createStartPage() {
    const controller = createController();
   
    const projectList = document.querySelector(".menu");
    const projectContainer = document.querySelector(".content")
    controller.setListEventListeners(projectList, "project", controller.addProject,  projectContainer);
}

createStartPage();