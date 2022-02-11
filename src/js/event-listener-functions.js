import { domInterfacer } from "./dom-interfacer"
import { controller } from "./controller"
import { storage } from "./storage"
import { projectStructurer } from "./project-structurer"

function setAddBtn(listInterface){
    listInterface.addBtn.addEventListener("click", () => {
        domInterfacer.cleanInput(listInterface.addPopup)
        domInterfacer.replaceElement(listInterface.addPopup, listInterface.addBtn)
        listInterface.addPopup.querySelector("input").focus()
    })
}

function setClosePopupBtn(listInterface){
    listInterface.closePopupBtn.addEventListener("click",
        domInterfacer.replaceElement.bind(null, listInterface.addBtn, listInterface.addPopup))
}

function setPopupAddBtn(listInterface, createFunction, setupFunction){
    listInterface.popupAddBtn.addEventListener("click", () => {
        const object = controller.createObject(listInterface.addPopup, createFunction)
        controller.addObject(object, listInterface.ul, setupFunction)
        listInterface.closePopupBtn.click()
    })
}

function setRemoveIcon(removeIcon, object){
    removeIcon.addEventListener("click", (event) => {
        event.stopPropagation()
        const ul = event.target.closest("ul")
        controller.removeObject(object, ul)
        storage.populateStorage()
        if (object.type == "project") domInterfacer.inbox.click()
    })
}

function setTitle(title, titleInput, todo){
    title.addEventListener("click", (event) => {
        event.stopPropagation()
        domInterfacer.replaceElement(titleInput, title)
        titleInput.value = todo.title
        titleInput.focus()
    })
}

function setTitleInput(title, titleInput, todo){
    titleInput.addEventListener("keydown", (event) => {
        event.stopPropagation()
        if (event.key == "Enter"){
            domInterfacer.changeTodoLiTitle(todo, titleInput)
            domInterfacer.replaceElement(title, titleInput)
            storage.populateStorage()
        }
    })
}

function setTodoIcon(itemIcon, todo){
    itemIcon.addEventListener("click", (event) => {
        const li = event.target.closest("li")
        todo.isFinished = !todo.isFinished
        domInterfacer.changeTodoIcon(todo, li)
        storage.populateStorage()
    })
}

function setDateInput(dateInput, todo){
    dateInput.addEventListener("change", (event) => {
        todo.date = event.target.value
        storage.populateStorage()
    })
}

function showAllTodoByFilter(filterFunction, ...filterArgs){
    domInterfacer.projectWindow.innerHTML = ""
    const filteredProjects = projectStructurer.filterTodos(filterFunction, ...filterArgs)
    const content = domInterfacer.createAllProjectsPage(filteredProjects)
    domInterfacer.projectWindow.appendChild(content)
}

export { setAddBtn, setClosePopupBtn, setDateInput, setPopupAddBtn, setRemoveIcon, setTitle, setTitleInput, setTodoIcon, showAllTodoByFilter }
