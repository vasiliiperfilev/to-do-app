import { createBaseObject } from "./base-object";
import TodoIcon from "../images/unfinished-task.png";
import { domInterfacer } from "./dom-interfacer";

function createTodo(parametersObject) {
    let title = parametersObject.title;
    let date = "";
    if (title === "") title = "Default title";

    const proto = createBaseObject("todo", title, TodoIcon, domInterfacer.createTodoListElement);

    return Object.assign({}, proto, { 

        get date() {
            return date;
        },

        set date(newDate) {
            this.date = newDate
        },
    });

}

export { createTodo };