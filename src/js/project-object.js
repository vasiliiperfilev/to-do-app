import { createStructurer } from "./structurer";
import { createBaseObject } from "./base-object";
import ProjectIcon from "../images/project.png";
import { createDomListFunctions } from "./dom-list-functions";

function createProject(parametersObject) {
    let title = parametersObject.title;
    if (title === "") title = "Default title";

    const todoList = {};
    const containType = "todo";
    const domListFunctions = createDomListFunctions()
    const proto1 = createStructurer(todoList, containType);
    const proto2 = createBaseObject("project", title, ProjectIcon, domListFunctions.createListElement);

    return Object.assign({}, proto1, proto2);
}

export { createProject };