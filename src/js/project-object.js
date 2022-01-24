import { createStructurer } from "./structurer";
import { createBaseObject } from "./base-object";
import ProjectIcon from "../images/project.png"

function createProject(title = "Default project") {
    const todoList = {};

    const proto1 = createStructurer(todoList);
    const proto2 = createBaseObject("project", title, ProjectIcon);

    return Object.assign({}, proto1, proto2 );
}

export { createProject };