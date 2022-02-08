import { createTodo } from "./todo-object";
import NotDoneIcon from "../images/unfinished-task.png";
import DoneIcon from "../images/finished-task.png";
import { selectorHolder } from "./selectorHolder";
import { objectManipulator } from "./object-manipulator";
import { domInterfacer } from "./dom-interfacer";

const todoController = (() => {
    
    function setupRemoveIcon(todo){
        const element = todo.liElement
        const removeIcon = domInterfacer.getLiInterface(element).removeIcon;
        removeIcon.addEventListener("click", (event) => {
            event.stopPropagation();
            const ul = event.target.closest("ul");
            objectManipulator.removeObject(todo, ul);
        });
    }

    function setupTitleInput(todo, liInterface){
        const titleInput = liInterface.titleInput;
        const title = liInterface.title;
        title.addEventListener("click", (event) => {
            event.stopPropagation();
            domInterfacer.replaceElement(titleInput, title);
            titleInput.value = todo.title;
            titleInput.focus();
        });
        titleInput.addEventListener("keydown", (event) => {
            event.stopPropagation();
            if (event.key == "Enter"){
                const li = event.target.closest("li");
                const a = event.target.closest("a");
                li.classList.remove(todo.titleToClassName());
                todo.title = titleInput.value;
                title.textContent = todo.title;
                li.classList.add(todo.titleToClassName());
                a.href = `#${todo.titleToClassName()}`
                domInterfacer.replaceElement(title, titleInput);
            }
        });
    }

    function setupTodoIcon(liIcon){
        liIcon.addEventListener("click", (event) => {
            const li = event.target.parentElement.parentElement;
            if (li.classList.contains(selectorHolder.done)){
                li.classList.remove(selectorHolder.done);
                liIcon.src = NotDoneIcon;
            }
            else {
                liIcon.src = DoneIcon;
                li.classList.add(selectorHolder.done);
            }
        })
    }

    function setupTodoListeners(todo){
        const todoElement = todo.liElement
        const liInterface = domInterfacer.getLiInterface(todoElement);
        setupRemoveIcon(todo);
        setupTitleInput(todo, liInterface);
        setupTodoIcon(liInterface.liIcon);
        const dateInput = liInterface.dateInput;
        dateInput.addEventListener("change", (event) => {
            todo.date = event.target.value;
        })
    }

    return {
        setupTodoListeners,
        createTodo
    }
})()

export { todoController };