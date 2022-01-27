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
        const content = domInteracer.createProjectPage(project);
        containerElement.innerHTML = "";
        containerElement.appendChild(content);
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
    
    function removeProject(project, projectList, projectContainer){
        const projectElement = projectList.querySelector(`.c${project.noSpaceTitle}`);
        if (projectElement.classList.contains("selected")) chooseProject.bind(projectList.children[0], projectContainer)();
        projectList.removeChild(projectElement);
        projectStructurer.remove(project);
    }

    function addProject(inputForm, projectList, projectContainer){
        const parameters = domInteracer.collectInput(inputForm);
        const project = createProject(parameters);
        projectStructurer.add(project);
        const listElement = domInteracer.createListElement(project);
        listElement.addEventListener("click", chooseProject.bind(listElement, projectContainer));
        const removeIcon = listElement.querySelector(".remove-icon");
        removeIcon.addEventListener("click", (event) => {
            event.stopPropagation();
            removeProject(project, projectList, projectContainer);
        });
        projectList.appendChild(listElement);
    }

    function addTodo(inputForm, todoList, project){
        const parameters = domInteracer.collectInput(inputForm);
        const todo = createTodo(parameters);
        project.add(todo);
        const todoElement = domInteracer.createListElement(todo);
        todoList.appendChild(todoElement);
    }
    //addTodo
    //removeTodo

    return {
        chooseProject,
        openAddToListPopup,
        closeAddToListPopup,
        addProject,
    };
}

export { createController };