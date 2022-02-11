import { domInterfacer } from "./dom-interfacer"
import { projectStructurer } from "./project-structurer"
import { createTodo } from "./todo-object"
import { setAddBtn, setClosePopupBtn, setDateInput, setRemoveIcon, 
    setTitle, setTitleInput, setPopupAddBtn, setTodoIcon, showAllTodoByFilter } from './event-listener-functions'

const eventListenerSetter = (() => {

    function setListEventListeners(listContainer, createFunction, setupFunction) {
        const listInterface = domInterfacer.getListUiElements(listContainer)
        setAddBtn(listInterface)
        setClosePopupBtn(listInterface)
        setPopupAddBtn(listInterface, createFunction, setupFunction)
    }

    function chooseProject() {
        const title = this.querySelector("span").textContent
        projectStructurer.activeProject = projectStructurer.container[title]
        showActiveProject()
    }

    function showActiveProject(){
        const project = projectStructurer.activeProject
        domInterfacer.selectObjectElement(project.liElement, "project")
        const projectPage = domInterfacer.createProjectPage(project)
        setListEventListeners(projectPage, createTodo, setTodoListeners)
        domInterfacer.projectWindow.innerHTML = ""
        domInterfacer.projectWindow.appendChild(projectPage)
    }

    function setProjectListeners(project){
        setRemoveIcon(domInterfacer.getLiChildren(project.liElement).removeIcon, project)
        project.liElement.addEventListener("click", function(){
            chooseProject.call(this)
            showActiveProject()
        })
    }

    function setTodoListeners(todo){
        const liChildren = domInterfacer.getLiChildren(todo.liElement)
        setRemoveIcon(liChildren.removeIcon, todo)
        setTitle(liChildren.title, liChildren.titleInput, todo)
        setTitleInput(liChildren.title, liChildren.titleInput, todo)
        setTodoIcon(liChildren.itemIcon, todo)
        setDateInput(liChildren.dateInput, todo)
    }

    function setDateFilters(liElement, filterFunction, ...filterArgs){
        liElement.addEventListener("click", (event) => {
            domInterfacer.selectClosestProjectLi(event)
            showAllTodoByFilter(filterFunction, ...filterArgs)
        })
    }

    function setInbox(liElement){
        liElement.addEventListener("click", (event) => {
            chooseProject.call(liElement)
            domInterfacer.selectClosestProjectLi(event)
        })
    }
    
    return {
        setListEventListeners,
        setProjectListeners,
        setTodoListeners,
        showAllTodoByFilter,
        setDateFilters,
        setInbox
    }
})()

export { eventListenerSetter }