import { BaseObject } from "./base-object";
import { domInterfacer } from "./dom-interfacer";


class Todo extends BaseObject{
    date;
    isFinished;

    constructor (parametersObject){
        super(parametersObject.title);
        this.date = parametersObject.date;
        this.isFinished = parametersObject.isFinished;
        this.createDomElement = domInterfacer.createTodoLi;
        this._domElement = this.createDomElement(this);
    }

    get allData(){
        const title = this.title;
        const date = this.date;
        const isFinished = this.isFinished;
        return { title, date, isFinished };
    }
}

export { Todo };