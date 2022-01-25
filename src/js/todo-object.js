import { createBaseObject } from "./base-object";
import TodoIcon from "../images/unfinished-task.png";

function createTodo(title = "Default title", description = "", date = "", priority = 0) {

    const proto = createBaseObject("todo", title, TodoIcon);

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