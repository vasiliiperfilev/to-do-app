import { projectStructurer } from "./project-structurer"
import { domInterfacer } from "./dom-interfacer"
import { selectorHolder } from "./selectorHolder"
import { objectManipulator } from "./object-manipulator"
import { todoController } from "./todo-controller"
import { listController } from "./list-controller"
import { parse, isBefore, isAfter, isEqual } from 'date-fns'

const projectController = (() => {

    function showActiveProject() {
        const project = projectStructurer.activeProject
        const projectPage = domInterfacer.createProjectPage(project)
        listController.setListEventListeners(projectPage, todoController.createTodo, todoController.setupTodoListeners)
        domInterfacer.projectWindow.innerHTML = ""
        domInterfacer.projectWindow.appendChild(projectPage)
    }

    function showAllTodoDateRange(startDate, endDate){
        domInterfacer.projectWindow.innerHTML = ""
        const content = domInterfacer.createAllProjectsPage(projectStructurer)
        Object.values(projectStructurer.container).forEach((project) => {
            const h1 = content.querySelector(`h1.${project.titleToClassName()}`)
            const ul = content.querySelector(`ul.${project.titleToClassName()}`)
            Object.values(project.container).forEach((todo) => {
                const todoDate = parse(todo.date, 'yyyy-MM-dd', new Date())
                if (arguments.length == 2){
                    if (isAfter(todoDate, endDate) || isBefore(todoDate, startDate) || todo.date == ""){
                        ul.removeChild(todo.liElement)
                    }
                }
                if (arguments.length == 1){
                    if (!isEqual(todoDate, startDate)){
                        ul.removeChild(todo.liElement)
                    }
                }
            })
            if (ul.childNodes.length == 0){
                domInterfacer.hideElement(h1)
            }
        })
        domInterfacer.projectWindow.appendChild(content)
    }

    function chooseProject() {
        const title = this.querySelector("span").textContent
        const project = projectStructurer.getObjectByTitle(title)
        projectStructurer.activeProject = project
        domInterfacer.selectObjectElement(project.liElement, "project")
        showActiveProject()
    }

    function setupRemoveIcon(project){
        const element = project.liElement
        const removeIcon = domInterfacer.getLiInterface(element).removeIcon
        removeIcon.addEventListener("click", (event) => {
            event.stopPropagation()
            const ul = event.target.closest("ul")
            objectManipulator.removeObject(project, ul)
            if (element.classList.contains(`${selectorHolder.selected}`)) chooseProject.bind(domInterfacer.inbox)()
        })
    }

    function setProjectListeners(project){
        const element = project.liElement
        setupRemoveIcon(project)
        element.addEventListener("click", chooseProject)
    }

    return {
        chooseProject,
        setProjectListeners,
        showAllTodoDateRange
    }
})()

export {
    projectController
}