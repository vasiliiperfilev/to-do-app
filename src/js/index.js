import "../styles/index.css";
import { createProjectController } from "./project-controller";
import { createProject } from "./project-object";
import { previousMonday, nextMonday, startOfToday } from 'date-fns'

function createStartPage() {
    const projectWindow = document.querySelector(".content");
    const controller = createProjectController(projectWindow);
   
    const projectList = document.querySelector(".list.project");
    controller.setListEventListeners(projectList, createProject, controller.setupProjectListeners);

    const thisWeek = document.querySelector(".cThis-week.project");
    const today = startOfToday();
    const monday = previousMonday(today);
    const nextMon = nextMonday(today)
    thisWeek.addEventListener("click", controller.showAllTodoDateRange.bind(null, monday, nextMon));
}

createStartPage();