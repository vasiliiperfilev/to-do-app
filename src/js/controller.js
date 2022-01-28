import {
    createProjectStructurer
} from "./project-structurer";
import {
    createDomInterfacer
} from "./dom-interfacer";
import {
    createProject
} from "./project-object"
import {
    createTodo
} from "./todo-object"

function createController() {
    //create default elements
    const domInteracer = createDomInterfacer();
    const projectStructurer = createProjectStructurer();
    const inbox = createProject({
        "title": "Inbox"
    });
    const defaultProject = createProject();
    projectStructurer.add(inbox);
    projectStructurer.add(defaultProject);

    function showActiveProject(containerElement) {
        const project = projectStructurer.activeProject;
        const projectPage = domInteracer.createProjectPage(project);
        setListEventListeners(projectPage, "todo", addTodo);
        containerElement.innerHTML = "";
        containerElement.appendChild(projectPage);
    }

    function setListEventListeners(listContainer, containType, addFunction, objectContainer) {
        const listInterface = domInteracer.getListInterface(listContainer, containType);
        listInterface.addBtn.addEventListener("click", 
            openAddToListPopup.bind(null, listInterface.addPopup, listInterface.addBtn));

        listInterface.closePopupBtn.addEventListener("click", 
            closeAddToListPopup.bind(null, listInterface.addPopup, listInterface.addBtn));

        listInterface.addPopupBtn.addEventListener("click", () => {
            addFunction(listInterface.addPopup, listInterface.ul, objectContainer);
            listInterface.closePopupBtn.click();
        });
    }

    function chooseProject(containerElement) {
        const title = this.querySelector("span").textContent;
        const project = projectStructurer.getObjectByTitle(title);
        projectStructurer.activeProject = project;
        domInteracer.selectElement(project);

        showActiveProject(containerElement);
    }

    function openAddToListPopup(popupElement, addBtnElement) {
        domInteracer.cleanInput(popupElement);
        domInteracer.showElement(popupElement);
        domInteracer.hideElement(addBtnElement);
    }

    function closeAddToListPopup(popupElement, addBtnElement) {
        domInteracer.showElement(addBtnElement);
        domInteracer.hideElement(popupElement);
    }


    function createObject(inputForm, createFunction, containerObject) {
        const parameters = domInteracer.collectInput(inputForm);
        const obj = createFunction(parameters);
        if (!containerObject.add(obj)) return;
        return obj
    }

    function removeProject(project, projectList, projectContainer) {
        const projectElement = projectList.querySelector(`.c${project.noSpaceTitle}`);
        const inbox = domInteracer.getElementBySelector(".cInbox");
        if (projectElement.classList.contains("selected")) chooseProject.bind(inbox, projectContainer)();
        projectList.removeChild(projectElement);
        projectStructurer.remove(project);
    }

    function addProject(inputForm, projectList, projectContainer) {
        try {
            const project = createObject(inputForm, createProject, projectStructurer);
            const projectElement = domInteracer.createListElement(project);
            projectElement.addEventListener("click", chooseProject.bind(projectElement, projectContainer));
            const removeIcon = projectElement.querySelector(".remove-icon");
            removeIcon.addEventListener("click", (event) => {
                event.stopPropagation();
                removeProject(project, projectList, projectContainer);
            });
            projectList.appendChild(projectElement);
        } catch {
            alert("Project is alredy exist");
        }
    }

    function removeTodo(todo, todoList) {
        const todoElement = todoList.querySelector(`.c${todo.noSpaceTitle}`);
        todoList.removeChild(todoElement);
        const project = projectStructurer.activeProject;
        project.remove(todo);
    }

    function addTodo(inputForm, todoList, _) {
        try {
            const project = projectStructurer.activeProject;
            const todo = createObject(inputForm, createTodo, project);
            const todoElement = domInteracer.createListElement(todo);
            const removeIcon = todoElement.querySelector(".remove-icon");
            removeIcon.addEventListener("click", (event) => {
                event.stopPropagation();
                removeTodo(todo, todoList);
            });
            todoList.appendChild(todoElement);
        }
        catch {
            alert("Todo already exists");
        }

    }

    return {
        get projectStructurer() {
            return projectStructurer;
        },

        addProject,
        chooseProject,
        openAddToListPopup,
        closeAddToListPopup,
        addProject,
        setListEventListeners,
    };
}

export {
    createController
};