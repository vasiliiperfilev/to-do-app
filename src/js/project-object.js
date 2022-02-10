import { createStructurer } from "./structurer"
import { createBaseObject } from "./base-object"
import ProjectIcon from "../images/project.png"
import { domInterfacer } from "./dom-interfacer"

function createProject(parametersObject) {
    let type = "project"
    
    const containType = "todo"
    const proto1 = createStructurer(containType)
    const proto2 = createBaseObject(type, parametersObject.title, domInterfacer.createProjectLi)

    return Object.assign({}, proto1, proto2)
}

export { createProject }