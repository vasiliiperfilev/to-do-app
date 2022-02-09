import { createBaseObject } from "./base-object"
import TodoIcon from "../images/unfinished-task.png"
import { domInterfacer } from "./dom-interfacer"

function createTodo(parametersObject) {
    let title = parametersObject.title
    let date = parametersObject.date || ""
    let isFinished = parametersObject.isFinished || false;
    if (title === "") title = "Default title"

    function allData(){
        const title = this.title
        const date = this.date
        const isFinished = this.isFinished
        return { title, date, isFinished }
    }

    const proto = createBaseObject("todo", title, TodoIcon, domInterfacer.createTodoListElement.bind(parametersObject))

    return Object.assign({}, proto, { 
        title,
        date,
        isFinished,
        allData,
    })

}

export { createTodo }