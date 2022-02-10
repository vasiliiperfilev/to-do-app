import { createBaseObject } from "./base-object"
import { domInterfacer } from "./dom-interfacer"

function createTodo(parametersObject) {
    let title = parametersObject.title
    let date = parametersObject.date || ""
    let isFinished = parametersObject.isFinished || false;
    let type = "todo"

    const proto = createBaseObject(type, title, domInterfacer.createTodoLi.bind(parametersObject))

    return Object.assign({}, proto, { 
        date,
        isFinished,
        allData: function(){
            const title = this.title
            const date = this.date
            const isFinished = this.isFinished
            return { title, date, isFinished }
        }
    })

}

export { createTodo }