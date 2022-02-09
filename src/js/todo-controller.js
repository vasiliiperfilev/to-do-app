import { createTodo } from "./todo-object"
import NotDoneIcon from "../images/unfinished-task.png"
import DoneIcon from "../images/finished-task.png"
import { selectorHolder } from "./selectorHolder"
import { objectManipulator } from "./object-manipulator"
import { domInterfacer } from "./dom-interfacer"
import { storage } from "./storage"

const todoController = (() => {
    
    function setupRemoveIcon(todo){
        const element = todo.liElement
        const removeIcon = domInterfacer.getLiInterface(element).removeIcon
        removeIcon.addEventListener("click", (event) => {
            event.stopPropagation()
            const ul = event.target.closest("ul")
            objectManipulator.removeObject(todo, ul)
            storage.populateStorage()
        })
    }

    function setupTitleInput(todo, liInterface){
        const titleInput = liInterface.titleInput
        const title = liInterface.title
        title.addEventListener("click", (event) => {
            event.stopPropagation()
            domInterfacer.replaceElement(titleInput, title)
            titleInput.value = todo.title
            titleInput.focus()
        })
        titleInput.addEventListener("keydown", (event) => {
            event.stopPropagation()
            if (event.key == "Enter"){
                const li = event.target.closest("li")
                const a = event.target.closest("a")
                li.classList.remove(todo.titleToClassName())
                todo.title = titleInput.value
                title.textContent = todo.title
                li.classList.add(todo.titleToClassName())
                a.href = `#${todo.titleToClassName()}`
                domInterfacer.replaceElement(title, titleInput)
                storage.populateStorage()
            }
        })
    }

    function setupTodoIcon(liIcon, todo){
        liIcon.addEventListener("click", (event) => {
            const li = event.target.closest("li")
            if (todo.isFinished){
                domInterfacer.unfinishTodo(li)
                todo.isFinished = false
            }
            else {
                todo.isFinished = true
                domInterfacer.finishTodo(li)
            }
            storage.populateStorage()
        })
    }

    function setupTodoListeners(todo){
        const todoElement = todo.liElement
        const liInterface = domInterfacer.getLiInterface(todoElement)
        setupRemoveIcon(todo)
        setupTitleInput(todo, liInterface)
        setupTodoIcon(liInterface.liIcon, todo)
        const dateInput = liInterface.dateInput
        dateInput.addEventListener("change", (event) => {
            todo.date = event.target.value
            storage.populateStorage()
        })
    }

    return {
        setupTodoListeners,
        createTodo
    }
})()

export { todoController }