import { createBaseObject } from "./base-object"
import TodoIcon from "../images/unfinished-task.png"
import { domInterfacer } from "./dom-interfacer"

function createTodo(parametersObject) {
    let title = parametersObject.title
    let date = ""
    let isFinished = false;
    if (title === "") title = "Default title"

    const proto = createBaseObject("todo", title, TodoIcon, domInterfacer.createTodoListElement)

    return Object.assign({}, proto, { 

        get date() {
            return date
        },

        get allData(){
            return { title, date, isFinished }
        },

        set date(newDate) {
            this.date = newDate
        },

        set isFinished(isFinished){
            this.isFinished = isFinished
        },

    })

}

export { createTodo }