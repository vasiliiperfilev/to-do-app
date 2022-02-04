import { createDomFunctions } from "./dom-basic-functions";
import { createSelectorHolder } from "./selectorHolder";
import RemoveIcon from "../images/remove-task.png";

function createDomListFunctions() {
    const domFunctions = createDomFunctions();
    const selectors = createSelectorHolder();

    function createListElement(object) {
        const li = document.createElement("li");
        li.classList.add(`${object.titleToClassName()}`, object.type);
        const link = document.createElement("a");
        link.href = `#${object.titleToClassName()}`;
        const elemIcon = domFunctions.createImg([selectors.liIcon, object.type], object.icon, "16", "16");
        const span = document.createElement("span");
        span.innerText = object.title;
        const rightLi = domFunctions.createDiv([selectors.rightLi, object.type])
        const removeIcon = domFunctions.createImg([selectors.removeLiIcon], RemoveIcon, "16", "16");
        link.append(elemIcon, span);
        rightLi.appendChild(removeIcon);
        li.append(link, rightLi);
        return li;
    }

    function createTodoListElement(todo) {
        const li = createListElement(todo);
        const a = li.querySelector("a");
        const titleInput = domFunctions.createInput([selectors.todo, selectors.inputTitle, selectors.hidden], "title", "text")
        const rightLi = li.querySelector(`.${selectors.rightLi}.${selectors.todo}`);
        const dateInput = domFunctions.createInput([selectors.todo, selectors.inputDate], "date", "date");
        dateInput.value = todo.date;
        a.append(titleInput);
        rightLi.prepend(dateInput);
        return li
    }

    function createList(object) {
        const div = domFunctions.createDiv([selectors.list, object.containType])
        const ul = document.createElement("ul");
        for (const key in object.container) {
            const element = object.container[key];
            const li = element.liElement;
            li.classList.remove(selectors.hidden);
            ul.appendChild(li);
        }
        div.appendChild(ul);
        return div
    }

    return Object.assign({}, domFunctions, {
        createListElement,
        createTodoListElement,
        createList,
    })
}

export { createDomListFunctions }