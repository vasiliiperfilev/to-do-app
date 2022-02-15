import { createDomFunctions } from "./dom-basic-functions";
import { selectorHolder } from "./selectorHolder";
import RemoveIcon from "../images/remove-task.png";
import DoneIcon from "../images/finished-task.png";
import UndoneIcon from "../images/unfinished-task.png";
import ProjectIcon from "../images/project.png";
import TodoIcon from "../images/unfinished-task.png";

function createDomListFunctions() {
    const domFunctions = createDomFunctions();

    function createLi(object) {
        const li = document.createElement("li");
        li.classList.add(`${object.titleToCssClassName()}`, object.constructor.name.toLowerCase());
        const link = document.createElement("a");
        link.href = `#${object.titleToCssClassName()}`;
        const span = document.createElement("span");
        span.innerText = object.title;
        const rightDiv = domFunctions.createDiv([selectorHolder.rightDiv]);
        const removeIcon = domFunctions.createImg([selectorHolder.removeitemIcon], RemoveIcon, "16", "16");
        link.append(span);
        rightDiv.appendChild(removeIcon);
        li.append(link, rightDiv);
        return li;
    }

    function getLiChildren(li){
        const itemIcon = li.querySelector(`.${selectorHolder.itemIcon}`);
        const anchor = li.querySelector("a");
        const removeIcon = li.querySelector(`.${selectorHolder.removeitemIcon}`);
        const dateInput = li.querySelector(`.${selectorHolder.inputDate}`);
        const titleInput = li.querySelector(`.${selectorHolder.inputTitle}`);
        const title = li.querySelector("span");
        const rightDiv = li.querySelector(`.${selectorHolder.rightDiv}`);
        return {
            itemIcon, anchor, removeIcon, dateInput, titleInput, title, rightDiv
        };
    }

    function addIconToLi(liAnchor, icon){
        const elemIcon = domFunctions.createImg([selectorHolder.itemIcon], icon, "16", "16");
        liAnchor.prepend(elemIcon);
    }

    function createProjectLi(){
        const li = createLi(this);
        const liAnchor = getLiChildren(li).anchor;
        addIconToLi(liAnchor, ProjectIcon);
        return li;
    }

    function finishTodo(li){
        li.classList.add(`${selectorHolder.done}`);
        getLiChildren(li).itemIcon.src = DoneIcon;
    }

    function unfinishTodo(li){
        li.classList.remove(`${selectorHolder.done}`);
        getLiChildren(li).itemIcon.src = UndoneIcon;
    }

    function changeTodoIcon(todo, li){
        if (todo.isFinished){
            finishTodo(li);
        }
        else {
            unfinishTodo(li);
        }
    }

    function createTodoLi() {
        const li = createLi(this);
        const liChildren = getLiChildren(li);
        addIconToLi(li,TodoIcon);
        changeTodoIcon(this, li);
        const titleInput = domFunctions.createInput([selectorHolder.todo, selectorHolder.inputTitle, selectorHolder.hidden], "title", "text");
        const dateInput = domFunctions.createInput([selectorHolder.todo, selectorHolder.inputDate], "date", "date");
        dateInput.value = this.date;
        liChildren.anchor.append(titleInput);
        liChildren.rightDiv.prepend(dateInput);
        return li;
    }

    function createUl(object) {
        const ul = document.createElement("ul");
        for (const key in object.container) {
            const element = object.container[key];
            const li = element.domElement;
            li.classList.remove(selectorHolder.hidden);
            ul.appendChild(li);
        }
        return ul;
    }

    function changeTodoLiTitle(todo, titleInput){
        const li = todo.domElement;
        li.classList.remove(todo.titleToCssClassName());
        todo.changeTitle(titleInput.value);
        getLiChildren(li).title.textContent = todo.title;
        li.classList.add(todo.titleToCssClassName());
        getLiChildren(li).anchor.href = `#${todo.titleToCssClassName()}`;
    }

    function createHeader(object, headerTag){
        const header = document.createElement(headerTag);
        header.textContent = object.title;
        return header;
    }

    function createDivUlElements(project, headerTag){
        const div = domFunctions.createDiv([selectorHolder.list, project.constructor.containClass]);
        const header = createHeader(project, headerTag);
        const ul = createUl(project);
        div.append(header, ul);
        return { div, header, ul };
    }

    return Object.assign({}, domFunctions, {
        createLi,
        getLiChildren,
        createTodoLi,
        changeTodoIcon,
        changeTodoLiTitle,
        createProjectLi,
        createUl,
        createDivUlElements,
        finishTodo,
        unfinishTodo,
        createHeader
    });
}

export { createDomListFunctions };