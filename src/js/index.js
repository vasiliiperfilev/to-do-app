import "../styles/index.css";
import { createProjectController } from "./project-controller";
import { listController } from "./list-controller";
import { createProject } from "./project-object";
import { startOfToday, startOfWeek, endOfWeek } from 'date-fns'

function createStartPage() {
    const projectWindow = document.querySelector(".content");
    const controller = createProjectController(projectWindow);
   
    const projectList = document.querySelector(".list.project");
    listController.setListEventListeners(projectList, createProject, controller.setupProjectListeners);

    const thisWeek = document.querySelector(".cThis-week.project");
    const today = startOfToday();
    const monday = startOfWeek(today);
    const nextMon = endOfWeek(today);
    thisWeek.addEventListener("click", controller.showAllTodoDateRange.bind(null, monday, nextMon));
}

createStartPage();