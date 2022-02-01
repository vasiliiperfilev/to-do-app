import { createStructurer } from "./structurer";
import { createBaseObject } from "./base-object";
import { createDomInterfacer } from "./dom-interfacer";
import ProjectIcon from "../images/project.png";

function createProject(parametersObject) {
    let title = "Default project";

    if (arguments.length == 1){
        title = parametersObject.title;
        if (title === "") title = "Default title";
    }

    const todoList = {};
    const containType = "todo";
    const domInteracer = createDomInterfacer()
    const proto1 = createStructurer(todoList, containType);
    const proto2 = createBaseObject("project", title, ProjectIcon, domInteracer.createListElement);

    return Object.assign({}, proto1, proto2 );
}

export { createProject };