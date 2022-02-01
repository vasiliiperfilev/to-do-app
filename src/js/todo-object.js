import { createBaseObject } from "./base-object";
import { createDomInterfacer } from "./dom-interfacer";
import TodoIcon from "../images/unfinished-task.png";

function createTodo(parametersObject) {
    let title = "Default title";
    let description = "";
    let date = "";
    let priority = 0;

    if (arguments.length == 1){
        title = parametersObject.title;
        //description = parametersObject.description;
        //date = parametersObject.date;
        //priority = parametersObject.priority;
    }

    const domInteracer = createDomInterfacer()
    const proto = createBaseObject("todo", title, TodoIcon, domInteracer.createTodoListElement);

    return Object.assign({}, proto, { 

        get description() {
            return description;
        },

        get date() {
            return date;
        },

        get priority() {
            return priority;
        },

        get allData() {
            return { title, description, date, priority };
        },

        set description(newDescription) {
            description = newDescription;
        },

        set date(newDate) {
            date = newDate;
        },
        
        set priority(newPriority) {
            priority = newPriority;
        }

    });

}

export { createTodo };