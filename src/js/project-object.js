import { createStructurer } from "./structurer"
import { createBaseObject } from "./base-object"
import ProjectIcon from "../images/project.png"
import { domInterfacer } from "./dom-interfacer"

function createProject(parametersObject) {
    let title = parametersObject.title
    if (title === "") title = "Default title"
    
    const todoList = {}
    const containType = "todo"
    const proto1 = createStructurer(todoList, containType)
    const proto2 = createBaseObject("project", title, ProjectIcon, domInterfacer.createListElement)

    return Object.assign({}, proto1, proto2)
}

export { createProject }