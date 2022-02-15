import { domInterfacer } from "./dom-interfacer";
import { projectStructurer } from "./project-structurer";
import { storage } from "./storage";
import { Project } from "./project-object";
import { Todo } from "./todo-object";
import { eventListenerSetter } from "./event-listeners-setter";

const controller = (() => {

    function removeObject(object, objectList){
        objectList.removeChild(object.domElement);
        projectStructurer.remove(object);
    }

    function createObject(inputForm, objClass) {
        const parameters = domInterfacer.collectInput(inputForm);
        const obj = new objClass(parameters);
        if (!projectStructurer.add(obj)) return;
        storage.populateStorage();
        return obj;
    }

    function addObject(object, objectList, setupFunction){
        try{
            const objectElement = object.domElement;
            setupFunction(object);
            objectList.appendChild(objectElement);
        }
        catch {
            alert("Alredy exists!");
        }
    }

    function populateContainer(){
        const projects = JSON.parse(localStorage.projects);
        Object.keys(projects).forEach((title) => {
            const project = new Project({title});
            eventListenerSetter.setProjectListeners(project);
            projectStructurer.add(project);
            Object.values(projects[title]).forEach((todoParams) => {
                const todo = new Todo(todoParams);
                eventListenerSetter.setTodoListeners(todo);
                projectStructurer.container[title].add(todo);
            });
        });   
    }

    return {
        createObject,
        addObject,
        removeObject,
        populateContainer
    };
})();

export { controller }