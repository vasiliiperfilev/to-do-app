import { createTodo } from "./todo-object";

function createTodoController(objectManipulator, domInterfacer, projectStructurer){
    
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
                todo.title = titleInput.value;
                title.textContent = titleInput.value;
                domInterfacer.replaceElement(title, titleInput);
            }
        });
    }

    function setupTodoListeners(todo, todoElement, todoList){
        const li = domInterfacer.getLiInterface(todoElement);
        setupRemoveIcon(todoElement, todo, todoList, projectStructurer.activeProject)
        setupTitleInput(todo, li, domInterfacer);
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