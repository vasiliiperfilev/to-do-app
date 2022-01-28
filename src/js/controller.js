import { createProjectStructurer } from "./project-structurer";
import { createDomInterfacer } from "./dom-interfacer";
import { createProject } from "./project-object"
import { createTodo } from "./todo-object"

function createController(){
    const domInteracer = createDomInterfacer();
    const projectStructurer = createProjectStructurer();
    const project = createProject();
    const todo = createTodo()
    project.add(todo);
    projectStructurer.add(project);

    function showActiveProject(containerElement) {
        const project = projectStructurer.activeProject;
        const projectPage = domInteracer.createProjectPage(project);
        setProjectPageEventListeners(projectPage, project);
        containerElement.innerHTML = "";
        containerElement.appendChild(projectPage);
    }

    function setProjectPageEventListeners(projectPage, project){
        const addTodoBtn = projectPage.querySelector(".add-btn.todo");
        const addTodoPopup = projectPage.querySelector(".add-popup.todo");
        addTodoBtn.addEventListener("click", openAddToListPopup.bind(null, addTodoPopup, addTodoBtn));

        const closePopupBtn = projectPage.querySelector(".add-popup.todo .cancel-btn-popup");
        closePopupBtn.addEventListener("click", closeAddToListPopup.bind(null, addTodoPopup, addTodoBtn));

        const todoList = projectPage.querySelector(".list.todo ul");
        const addTodoPopupBtn = projectPage.querySelector(".add-popup.todo .add-btn-popup");
        addTodoPopupBtn.addEventListener("click", () => {
            addTodo(addTodoPopup, todoList, project);
            closePopupBtn.click();
        });
    }

    function chooseProject(containerElement){
        const title = this.querySelector("span").textContent;
        const project = projectStructurer.getObjectByTitle(title);
        projectStructurer.activeProject = project;
        domInteracer.selectElement(this);

        showActiveProject(containerElement);
    }

    function openAddToListPopup(popupElement, addBtnElement){
        domInteracer.cleanInput(popupElement);
        domInteracer.showElement(popupElement);
        domInteracer.hideElement(addBtnElement);
    }

    function closeAddToListPopup(popupElement, addBtnElement){
        domInteracer.showElement(addBtnElement);
        domInteracer.hideElement(popupElement);
    }


    function createObject(inputForm, createFunction, containerObject){
        const parameters = domInteracer.collectInput(inputForm);
        const obj = createFunction(parameters);
        if (!containerObject.add(obj)) return;
        return obj
    }
    
    function removeProject(project, projectList, projectContainer){
        const projectElement = projectList.querySelector(`.c${project.noSpaceTitle}`);
        if (projectElement.classList.contains("selected")) chooseProject.bind(projectList.children[0], projectContainer)();
        projectList.removeChild(projectElement);
        projectStructurer.remove(project);
    }

    function addProject(inputForm, projectList, projectContainer){
        const project = createObject(inputForm, createProject, projectStructurer);
        const projectElement = domInteracer.createListElement(project);
        projectElement.addEventListener("click", chooseProject.bind(projectElement, projectContainer));
        const removeIcon = projectElement.querySelector(".remove-icon");
        removeIcon.addEventListener("click", (event) => {
            event.stopPropagation();
            removeProject(project, projectList, projectContainer);
        });
        projectList.appendChild(projectElement);
    }

    function removeTodo(todo, todoList){
        const todoElement = todoList.querySelector(`.c${todo.noSpaceTitle}`);
        todoList.removeChild(todoElement);
        const project = projectStructurer.activeProject;
        project.remove(todo);
    }

    function addTodo(inputForm, todoList, project){
        const todo = createObject(inputForm, createTodo, project);
        const todoElement = domInteracer.createListElement(todo);
        const removeIcon = todoElement.querySelector(".remove-icon");
        removeIcon.addEventListener("click", (event) => {
            event.stopPropagation();
            removeTodo(todo, todoList);
        });
        todoList.appendChild(todoElement);
    }

    return {
        chooseProject,
        openAddToListPopup,
        closeAddToListPopup,
        addProject
    };
}

export { createController };