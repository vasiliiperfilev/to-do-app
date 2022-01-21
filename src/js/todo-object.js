import { createListObject } from "./list-object";
import TodoIcon from "../images/unfinished-task";

function createTodoItem(title = "Default title", description = "", date = "", priority = 0) {

    const proto = createListObject("todo", title, TodoIcon);

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

export { createTodoItem };