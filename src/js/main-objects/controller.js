import { domInterfacer } from "../dom/dom-interfacer";
import { projectStructurer } from "../classes/project-structurer-class";
import { storage } from "./storage";
import { Project } from "../classes/project-class";
import { Todo } from "../classes/todo-class";
import { eventListenerSetter } from "../event-listeners/event-listeners-setter";

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

    function addTutorialTodo(){
        const tutorialTodo = new Todo({title: "Click me to change description!"});
        eventListenerSetter.setTodoListeners(tutorialTodo);
        projectStructurer.container["Inbox"].add(tutorialTodo);
    }

    function setProjectStructurer(){
        if(localStorage.getItem("projects")) {
            populateContainer();
        }
        else {
            addTutorialTodo();
        };
    }

    return {
        createObject,
        addObject,
        removeObject,
        setProjectStructurer
    };
})();

export { controller }