import {
    createProjectStructurer
} from "./project-structurer";
import {
    createDomInterfacer
} from "./dom-interfacer";
import {
    createTodo
} from "./todo-object";
import {
    createSelectorHolder
} from "./selectorHolder";
import { createObjectManipulator } from "./object-manipulator";

function createController(projectWindow) {
    //create objects
    const domInterfacer = createDomInterfacer();
    const projectStructurer = createProjectStructurer();
    const selectors = createSelectorHolder();
    const objectManipulator = createObjectManipulator();

    function showActiveProject() {
        const project = projectStructurer.activeProject;
        const projectPage = domInterfacer.createProjectPage(project);
        setListEventListeners(projectPage, createTodo, setupTodoListeners);
        projectWindow.innerHTML = "";
        projectWindow.appendChild(projectPage);
    }

    function setListEventListeners(listContainer, createFunction, setupFunction) {
        const listInterface = domInterfacer.getListInterface(listContainer);
        listInterface.addBtn.addEventListener("click", 
            domInterfacer.showPopup.bind(null, listInterface.addPopup, listInterface.addBtn));

        listInterface.closePopupBtn.addEventListener("click", 
            domInterfacer.hidePopup.bind(null, listInterface.addPopup, listInterface.addBtn));

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

    function setupTodoListeners(todo, todoElement, todoList){
        setupRemoveIcon(todoElement, todo, todoList, projectStructurer.activeProject)
        const dateInput = domInterfacer.getLiInterface(todoElement).dateInput;
        dateInput.addEventListener("change", (event) => {
            todo.date = event.target.value;
        })
    }

    function setupProjectListeners(project, projectElement, projectList){
        setupRemoveIcon(projectElement, project, projectList, projectStructurer);
        projectElement.addEventListener("click", chooseProject);
    }

    return {
        chooseProject,
        setListEventListeners,
        setupProjectListeners,
    };
}

export {
    createController
};