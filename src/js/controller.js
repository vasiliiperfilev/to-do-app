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
        this.classList.add("project-active");

        showActiveProject(containerElement);
    }

    function openAddToListPopup(popupElement, addBtnElement){
        domInteracer.showElement(popupElement);
        domInteracer.hideElement(addBtnElement);
    }

    function closeAddToListPopup(popupElement, addBtnElement){
        domInteracer.showElement(addBtnElement);
        domInteracer.hideElement(popupElement);
    }
    
    function addProject(){
        
    }
    //addProject
    //removeProject
    //addTodo
    //removeTodo
    //showProject
    return {
        chooseProject,
    };
}

export { createController };