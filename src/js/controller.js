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
    
    function addProject(inputForm, projectList, projectContainer){
        const parameters = domInteracer.collectInput(inputForm);
        const project = createProject(parameters);
        projectStructurer.add(project);
        const listElement = domInteracer.createListElement(project);
        listElement.addEventListener("click", chooseProject.bind(listElement, projectContainer));
        projectList.appendChild(listElement, projectList);
    }
    //removeProject
    //addTodo
    //removeTodo
    //showProject
    return {
        chooseProject,
        openAddToListPopup,
        closeAddToListPopup,
        addProject
    };
}

export { createController };