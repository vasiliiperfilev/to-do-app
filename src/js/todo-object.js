import { createBaseObject } from "./base-object";
import TodoIcon from "../images/unfinished-task.png";
import { createDomListFunctions } from "./dom-list-functions";

function createTodo(parametersObject) {
    let title = parametersObject.title;
    let date = "";
    if (title === "") title = "Default title";

    const domListFunctions = createDomListFunctions()
    const proto = createBaseObject("todo", title, TodoIcon, domListFunctions.createTodoListElement);

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