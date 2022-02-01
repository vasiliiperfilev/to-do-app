import {
    createProjectStructurer
} from "./project-structurer";
import {
    createDomInterfacer
} from "./dom-interfacer";
import {
    createTodo
} from "./todo-object"

function createController(projectWindow) {
    //create objects
    const domInteracer = createDomInterfacer();
    const projectStructurer = createProjectStructurer();

    function showActiveProject() {
        const project = projectStructurer.activeProject;
        const projectPage = domInteracer.createProjectPage(project);
        setListEventListeners(projectPage, createTodo, setupTodoListeners);
        projectWindow.innerHTML = "";
        projectWindow.appendChild(projectPage);
    }

    function setListEventListeners(listContainer, createFunction, setupFunction) {
        const listInterface = domInteracer.getListInterface(listContainer);
        listInterface.addBtn.addEventListener("click", 
            domInteracer.showPopup.bind(null, listInterface.addPopup, listInterface.addBtn));

        listInterface.closePopupBtn.addEventListener("click", 
            domInteracer.hidePopup.bind(null, listInterface.addPopup, listInterface.addBtn));

        listInterface.addPopupBtn.addEventListener("click", () => {
            const object = createObject(listInterface.addPopup, createFunction)
            addObject(object, listInterface.ul, setupFunction);
            listInterface.closePopupBtn.click();
        });
    }

    function chooseProject() {
        const title = this.querySelector("span").textContent;
        const project = projectStructurer.getObjectByTitle(title);
        projectStructurer.activeProject = project;
        domInteracer.selectObjectElement(project);
        showActiveProject();
    }

    function removeObject(object, objectList, objectContainer){
        const objectElement = objectList.querySelector(`.${object.titleToClassName}`);
        objectList.removeChild(objectElement);
        objectContainer.remove(object);
    }

    function createObject(inputForm, createFunction) {
        const parameters = domInteracer.collectInput(inputForm);
        const obj = createFunction(parameters);
        if (!projectStructurer.add(obj)) return;
        return obj
    }

    function setupRemoveIcon(element, object, objectList, objectContainer){
        const removeIcon = element.querySelector(".remove-icon");
        removeIcon.addEventListener("click", (event) => {
            event.stopPropagation();
            removeObject(object, objectList, objectContainer);
            if (element.classList.contains("selected")) chooseProject.bind(domInteracer.inbox)();
        });
    }

    function setupTodoListeners(todo, todoElement, todoList){
        setupRemoveIcon(todoElement, todo, todoList, projectStructurer.activeProject)
        const dateInput = todoElement.querySelector(".todo.input-date");
        dateInput.addEventListener("change", (event) => {
            todo.date = event.target.value;
        })
    }

    function setupProjectListeners(project, projectElement, projectList){
        setupRemoveIcon(projectElement, project, projectList, projectStructurer);
        projectElement.addEventListener("click", chooseProject);
    }

    function addObject(object, objectList, setupFunction){
        // try{
            const objectElement = object.liElement;
            setupFunction(object, objectElement, objectList);
            objectList.appendChild(objectElement);
        // }
        // catch {
        //     alert("Alredy exists!");
        // }
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