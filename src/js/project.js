function createProject(name = "Default project") {
    const todoList = {};

    const addTodo = (todo) => {
        todoList[todo.title] == undefined ? todoList[todo.title] = todo : false;
    }

    const removeTodo = (todo) => {
        if (todoList[todo.title] != undefined) {
            delete todoList[todo.title]
        }
        else {
            return false;
        }
    }

    return {
        get name() {
            return name;
        },

        set name(newName){
            name = newName;
        },

        get todoList() {
            return todoList;
        },

        addTodo,

        removeTodo
    };
}

export { createProject };