import {
    projectStructurer
} from "./project-structurer";
import {
    domInterfacer
} from "./dom-interfacer";
import {
    selectorHolder
} from "./selectorHolder";
import { objectManipulator } from "./object-manipulator";
import { todoController } from "./todo-controller";
import { listController } from "./list-controller";
import { parse, isBefore, isAfter } from 'date-fns';

function createProjectController(projectWindow) {

    function showActiveProject() {
        const project = projectStructurer.activeProject;
        const projectPage = domInterfacer.createProjectPage(project);
        listController.setListEventListeners(projectPage, todoController.createTodo, todoController.setupTodoListeners);
        projectWindow.innerHTML = "";
        projectWindow.appendChild(projectPage);
    }

    function showAllTodoDateRange(startDate, endDate){
        projectWindow.innerHTML = "";
        const content = domInterfacer.createAllProjectsPage(projectStructurer);
        Object.values(projectStructurer.container).forEach((project) => {
            //if project is empty hide project.projectList(when projectList make as project parameter)
            Object.values(project.container).forEach((todo) => {
                const todoDate = parse(todo.date, 'yyyy-MM-dd', new Date());
                //if 1 arg and if 2 arg
                if (isAfter(todoDate, endDate) || isBefore(todoDate, startDate)){
                    domInterfacer.hideElement(todo.liElement);
                }
            })
        })
        projectWindow.appendChild(content);
    }

    function chooseProject() {
        const title = this.querySelector("span").textContent;
        const project = projectStructurer.getObjectByTitle(title);
        projectStructurer.activeProject = project;
        domInterfacer.selectObjectElement(project);
        showActiveProject();
    }

    function setupRemoveIcon(project){
        const element = project.liElement
        const removeIcon = domInterfacer.getLiInterface(element).removeIcon;
        removeIcon.addEventListener("click", (event) => {
            event.stopPropagation();
            const ul = event.target.closest("ul");
            objectManipulator.removeObject(project, ul);
            if (element.classList.contains(`${selectorHolder.selected}`)) chooseProject.bind(domInterfacer.inbox)();
        });
    }

    function setupProjectListeners(project){
        const element = project.liElement;
        setupRemoveIcon(project);
        element.addEventListener("click", chooseProject);
    }

    return {
        chooseProject,
        setupProjectListeners,
        showAllTodoDateRange
    };
}

export {
    createProjectController
};