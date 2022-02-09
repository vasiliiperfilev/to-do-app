import { projectStructurer } from "./project-structurer";
import { projectController } from "./project-controller";
import { createProject } from "./project-object";
import { todoController } from "./todo-controller";

const storage = (() => {
    function storageAvailable(type) {
        var storage;
        try {
            storage = window[type];
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch(e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }

    function populateStorage(){
        const projects = {}
        Object.values(projectStructurer.container).forEach(project => {
            projects[project.title] = {}
            Object.values(project.container).forEach(todo => {
                projects[project.title][todo.title] = todo.allData()
            })
        })
        const stringProjects = JSON.stringify(projects)
        localStorage.setItem("projects", stringProjects)
    }

        function populateContainer(){
            const projects = JSON.parse(localStorage.projects);
            Object.keys(projects).forEach((title) => {
                const project = createProject({title})
                projectController.setProjectListeners(project)
                projectStructurer.add(project)
                Object.values(projects[title]).forEach((todoParams) => {
                    const todo = todoController.createTodo(todoParams)
                    todoController.setupTodoListeners(todo)
                    projectStructurer.container[title].add(todo)
                })
            })
        }

    return {
        storageAvailable,
        populateStorage,
        populateContainer
    }
    
})()

export { storage }