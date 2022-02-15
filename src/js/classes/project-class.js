import "../../styles/project.css";
import { BaseObject } from "./base-class";
import { domInterfacer } from "../dom/dom-interfacer";
import { Todo } from "./todo-class";

class Project extends BaseObject{
    #container = {};
    static containClass = Todo.name.toLowerCase();

    constructor(parametersObject){
        super(parametersObject.title);
        this.createDomElement = domInterfacer.createProjectLi;
        this.domElement = this.createDomElement(this);
    }

    get container() {
        return this.#container;
    }

    add(object){
        if (object.title in this.#container) return false;
        this.#container[object.title] = object;
        return true;
    }
    remove(object){
        delete this.#container[object.title];
    }
}

export { Project };