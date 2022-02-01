import { createBaseObject } from "./base-object";
import { createDomInterfacer } from "./dom-interfacer";
import TodoIcon from "../images/unfinished-task.png";

function createTodo(parametersObject) {
    let title = "Default title";
    let date = "";

    if (arguments.length == 1){
        title = parametersObject.title;
        if (title === "") title = "Default title";
    }

    const domInteracer = createDomInterfacer()
    const proto = createBaseObject("todo", title, TodoIcon, domInteracer.createTodoListElement);

    return Object.assign({}, proto, { 

        get date() {
            return date;
        },

        set date(newDate) {
            date = newDate;
        },

    });

}

export { createTodo };