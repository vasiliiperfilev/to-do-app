import { createStructurer } from "./structurer";

function createProject(title = "Default project") {
    const todoList = {};

    const proto = createStructurer(todoList);

    return Object.assign({}, proto, {
        get title() {
            return title;
        },

        set title(newTitle){
            title = newTitle;
        },

    });
}

export { createProject };