import { createTodo } from "./todo-object"
import { objectManipulator } from "./object-manipulator"
import { domInterfacer } from "./dom-interfacer"
import { storage } from "./storage"

const todoController = (() => {
    
    function setupRemoveIcon(removeIcon, todo){
        removeIcon.addEventListener("click", (event) => {
            event.stopPropagation()
            const ul = event.target.closest("ul")
            objectManipulator.removeObject(todo, ul)
            storage.populateStorage()
        })
    }

    function setupTitle(title, titleInput, todo){
        title.addEventListener("click", (event) => {
            event.stopPropagation()
            domInterfacer.replaceElement(titleInput, title)
            titleInput.value = todo.title
            titleInput.focus()
        })
    }
    
    function setupTitleInput(title, titleInput, todo){
        titleInput.addEventListener("keydown", (event) => {
            event.stopPropagation()
            if (event.key == "Enter"){
                domInterfacer.changeTodoLiTitle(todo, titleInput)
                domInterfacer.replaceElement(title, titleInput)
                storage.populateStorage()
            }
        })
    }

    function setupTodoIcon(itemIcon, todo){
        itemIcon.addEventListener("click", (event) => {
            const li = event.target.closest("li")
            todo.isFinished = !todo.isFinished
            domInterfacer.changeTodoIcon(todo, li)
            storage.populateStorage()
        })
    }

    function setupDateInput(dateInput, todo){
        dateInput.addEventListener("change", (event) => {
            todo.date = event.target.value
            storage.populateStorage()
        })
    }

    function setupTodoListeners(todo){
        const liChildren = domInterfacer.getLiChildren(todo.liElement)
        setupRemoveIcon(liChildren.removeIcon, todo)
        setupTitle(liChildren.title, liChildren.titleInput, todo)
        setupTitleInput(liChildren.title, liChildren.titleInput, todo)
        setupTodoIcon(liChildren.itemIcon, todo)
        setupDateInput(liChildren.dateInput, todo)
    }

    return {
        setupTodoListeners,
        createTodo
    }
})()

export { todoController }