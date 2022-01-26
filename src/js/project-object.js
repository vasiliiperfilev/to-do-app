import { createStructurer } from "./structurer";
import { createBaseObject } from "./base-object";
import ProjectIcon from "../images/project.png"

function createProject(parametersObject) {
    let title = "Default project";

    if (arguments.length == 1){
        title = parametersObject.title;
    }

    const todoList = {};
    const proto1 = createStructurer(todoList, "todo");
    const proto2 = createBaseObject("project", title, ProjectIcon);

    return Object.assign({}, proto1, proto2 );
}

export { createProject };