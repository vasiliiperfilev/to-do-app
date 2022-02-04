import {
    createProjectStructurer
} from "./project-structurer";
import {
    createDomInterfacer
} from "./dom-interfacer";
import {
    createSelectorHolder
} from "./selectorHolder";
import { createObjectManipulator } from "./object-manipulator";
import { createTodoController } from "./todo-controller";
import { parse, isBefore, isAfter } from 'date-fns';

function createProjectController(projectWindow) {
    //create objects
    const domInterfacer = createDomInterfacer();
    const projectStructurer = createProjectStructurer();
    const selectors = createSelectorHolder();
    const objectManipulator = createObjectManipulator();
    const todoController = createTodoController(objectManipulator, domInterfacer,projectStructurer);

    function showActiveProject() {
        const project = projectStructurer.activeProject;
        const projectPage = domInterfacer.createProjectPage(project);
        setListEventListeners(projectPage, todoController.createTodo, todoController.setupTodoListeners);
        projectWindow.innerHTML = "";
        projectWindow.appendChild(projectPage);
    }

    function showAllTodoDateRange(startDate, endDate){
        projectWindow.innerHTML = "";
        const content = domInterfacer.createAllProjectsPage(projectStructurer);
        Object.values(projectStructurer.container).forEach((project) => {
            Object.values(project.container).forEach((todo) => {
                const todoDate = parse(todo.date, 'yyyy-MM-dd', new Date());
                if (isAfter(todoDate, endDate) || isBefore(todoDate, startDate)){
                    domInterfacer.hideElement(todo.liElement);
                }
            })
        })
        projectWindow.appendChild(content);
    }

    //after creating modules move this function to dom-list-functions
    function setListEventListeners(listContainer, createFunction, setupFunction) {
        const listInterface = domInterfacer.getListInterface(listContainer);
        listInterface.addBtn.addEventListener("click", () => {
            domInterfacer.cleanInput(listInterface.addPopup);
            domInterfacer.replaceElement(listInterface.addPopup, listInterface.addBtn);
        });

        listInterface.closePopupBtn.addEventListener("click", 
            domInterfacer.replaceElement.bind(null,  listInterface.addBtn,listInterface.addPopup));

        listInterface.addPopupBtn.addEventListener("click", () => {
            const object = objectManipulator.createObject(listInterface.addPopup, createFunction, projectStructurer)
            objectManipulator.addObject(object, listInterface.ul, setupFunction);
            listInterface.closePopupBtn.click();
        });
    }

    function chooseProject() {
        const title = this.querySelector("span").textContent;
        const project = projectStructurer.getObjectByTitle(title);
        projectStructurer.activeProject = project;
        domInterfacer.selectObjectElement(project);
        showActiveProject();
    }

    function setupRemoveIcon(element, object, objectList, objectContainer){
        const removeIcon = domInterfacer.getLiInterface(element).removeIcon;
        removeIcon.addEventListener("click", (event) => {
            event.stopPropagation();
            objectManipulator.removeObject(object, objectList, objectContainer);
            if (element.classList.contains(`${selectors.selected}`)) chooseProject.bind(domInterfacer.inbox)();
        });
    }

    function setupProjectListeners(project, projectElement, projectList){
        setupRemoveIcon(projectElement, project, projectList, projectStructurer);
        projectElement.addEventListener("click", chooseProject);
    }

    return {
        chooseProject,
        setListEventListeners,
        setupProjectListeners,
        showAllTodoDateRange
    };
}

export {
    createProjectController
};