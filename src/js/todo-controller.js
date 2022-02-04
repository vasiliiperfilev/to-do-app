import { createTodo } from "./todo-object";
import NotDoneIcon from "../images/unfinished-task.png";
import DoneIcon from "../images/finished-task.png";
import { createSelectorHolder } from "./selectorHolder";

function createTodoController(objectManipulator, domInterfacer, projectStructurer){
    const selectors = createSelectorHolder();
    
    function setupRemoveIcon(element, object, objectList, objectContainer){
        const removeIcon = domInterfacer.getLiInterface(element).removeIcon;
        removeIcon.addEventListener("click", (event) => {
            event.stopPropagation();
            objectManipulator.removeObject(object, objectList, objectContainer);
        });
    }

    function setupTitleInput(todo, li, domInterfacer){
        const titleInput = li.titleInput;
        const title = li.title;
        title.addEventListener("click", (event) => {
            event.stopPropagation();
            domInterfacer.replaceElement(titleInput, title);
            titleInput.value = todo.title;
            titleInput.focus();
        });
        titleInput.addEventListener("keydown", (event) => {
            event.stopPropagation();
            if (event.key == "Enter"){
                const li = event.target.parentElement.parentElement;
                const a = event.target.parentElement
                //make func in domListFunc changeLiClass
                li.classList.remove(todo.titleToClassName());
                todo.title = titleInput.value;
                title.textContent = todo.title;
                li.classList.add(todo.titleToClassName());
                a.href = `#${todo.titleToClassName()}`
                domInterfacer.replaceElement(title, titleInput);
            }
        });
    }

    function setupTodoIcon(li){
        const liIcon = li.liIcon;
        liIcon.addEventListener("click", (event) => {
            const li = event.target.parentElement.parentElement;
            if (li.classList.contains(selectors.done)){
                li.classList.remove(selectors.done);
                liIcon.src = NotDoneIcon;
            }
            else {
                liIcon.src = DoneIcon;
                li.classList.add(selectors.done);
            }
        })
    }

    //todoElement = todo.li, todoList = projectStructurer.activeProject.domList
    function setupTodoListeners(todo, todoElement, todoList){
        //rename liInterface
        const li = domInterfacer.getLiInterface(todoElement);
        //reduce arguments
        setupRemoveIcon(todoElement, todo, todoList, projectStructurer.activeProject)
        //when domInt is globall remove
        setupTitleInput(todo, li, domInterfacer);
        //pass li.liIcon
        setupTodoIcon(li);
        const dateInput = li.dateInput;
        dateInput.addEventListener("change", (event) => {
            todo.date = event.target.value;
        })
    }

    return {
        setupTodoListeners,
        createTodo
    }
}

export { createTodoController };