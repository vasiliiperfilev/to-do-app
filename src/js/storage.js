import { projectStructurer } from "./project-structurer";
import { createProject } from "./project-object";
import { createTodo } from "./todo-object";
import { eventListenerSetter } from "./event-listeners-setter";

const storage = (() => {
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
            eventListenerSetter.setProjectListeners(project)
            projectStructurer.add(project)
            Object.values(projects[title]).forEach((todoParams) => {
                const todo = createTodo(todoParams)
                eventListenerSetter.setTodoListeners(todo)
                projectStructurer.container[title].add(todo)
            })
        })   
    }

    return {
        populateStorage,
        populateContainer
    }
    
})()

export { storage }