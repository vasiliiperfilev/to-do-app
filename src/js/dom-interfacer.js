import RemoveIcon from "../images/remove-task.png";
import AddIcon from "../images/add-icon.png";
import { createDomFunctions } from "./dom-functions";
import { createSelectorHolder } from "./selectorHolder";

function createDomInterfacer(){
    const domFunctions = createDomFunctions();
    const selectors = createSelectorHolder();

    function createListElement(object){
        const li = document.createElement("li");
        li.classList.add(`${object.titleToClassName}`, object.type);
    
        const link = document.createElement("a");
        link.href = `#${object.titleToClassName}`;
        
        const elemIcon = domFunctions.createImg(selectors.liIcon, object.icon, "16", "16");
    
        const span = document.createElement("span");
        span.textContent = object.title;
        
        const rightLi = domFunctions.createDiv([selectors.rightLi, object.type])

        const removeIcon = domFunctions.createImg([selectors.removeLiIcon], RemoveIcon, "16", "16");
        
        link.append(elemIcon, span);
        rightLi.appendChild(removeIcon);
        li.append(link, rightLi);
    
        return li;
    }
    
    function createTodoListElement(todo){
        const li = createListElement(todo);
        const rightLi = li.querySelector(`.${selectors.rightLi}.${selectors.todo}`);
        const dateInput = domFunctions.createInput([selectors.todo, selectors.inputDate], "date", "date");
        rightLi.prepend(dateInput);
        return li
    }

    function createList(object) {
        const div = domFunctions.createDiv([selectors.list, object.containType])
        const ul = document.createElement("ul");

        for (const key in object.container) {
            const element = object.container[key];
            const li = element.liElement;
            ul.appendChild(li);
        }

        div.appendChild(ul);
        return div
    }

    function createAddBtn(objectType) {
        const btn = domFunctions.createBtn([selectors.addBtn, objectType, selectors.active], `Add ${objectType}`);
        const btnIcon = domFunctions.createImg([],AddIcon, "16", "16");
        btn.prepend(btnIcon);

        return btn;
    }

    function createAddPopup(addType){
        const div = domFunctions.createDiv([selectors.addPopup, addType, selectors.hidden]);
        const input = domFunctions.createInput([selectors.addPopup, selectors.inputTitle], "title", "text");
        const btnContainer = domFunctions.createDiv([selectors.btnContainer])

        const addBtn = domFunctions.createBtn([selectors.addPopup, selectors.addBtn], "Add");
        const cancelBtn = domFunctions.createBtn([selectors.addPopup, selectors.cancelBtn], "Cancel");

        btnContainer.append(addBtn, cancelBtn);
        div.append(input, btnContainer);

        return div
    }

    function createProjectPage(project) {
        const content = document.createElement("div");
        content.id = "content";
        const h1 = document.createElement("h1");
        h1.textContent = project.title;

        const ul = createList(project);
        const addBtn = createAddBtn("todo");
        const addPopup = createAddPopup("todo");

        content.append(h1, ul, addBtn, addPopup);

        return content;
    }

    function selectObjectElement(object){
        const element = document.querySelector(`.${object.titleToClassName}.${object.type}`);
        const previousSelected = document.querySelector(`.${selectors.selected}.${object.type}`);
        if (previousSelected) previousSelected.classList.remove(`${selectors.selected}`);
        element.classList.add("selected");
    }

    function getListInterface(listContainer){
        const addBtn = listContainer.querySelector(`.${selectors.addBtn}`);
        const addPopup = listContainer.querySelector(`.${selectors.addPopup}`);
        const closePopupBtn = listContainer.querySelector(`.${selectors.addPopup} .${selectors.cancelBtn}`);
        const ul = listContainer.querySelector(`.${selectors.list} ul`);
        const addPopupBtn = listContainer.querySelector(`.${selectors.addPopup}.${selectors.addBtn}`);

        return {
            addBtn, addPopup, addPopupBtn, closePopupBtn, ul
        }
    }

    function getLiInterface(li){
        const removeIcon = li.querySelector(`.${selectors.removeLiIcon}`);
        const dateInput = li.querySelector(`.${selectors.inputDate}`);
        return {
            removeIcon, dateInput
        }
    }

    return {
        createListElement,
        createTodoListElement,
        createProjectPage,
        collectInput: domFunctions.collectInput,
        showPopup: domFunctions.showPopup,
        hidePopup: domFunctions.hidePopup,
        selectObjectElement,
        getListInterface,
        getLiInterface,
        get inbox(){
            return document.querySelector(`.${selectors.inbox}.${selectors.project}`)
        }
    };
}

export { createDomInterfacer };