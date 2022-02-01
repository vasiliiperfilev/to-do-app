import RemoveIcon from "../images/remove-task.png";
import AddIcon from "../images/add-icon.png";
import { createDomFunctions } from "./dom-functions";

function createDomInterfacer(){
    const domFunctions = createDomFunctions();

    function createListElement(object){
        const li = document.createElement("li");
        li.classList.add(`${object.titleToClassName}`, object.type);
    
        const link = document.createElement("a");
        link.href = `#${object.titleToClassName}`;
        
        const elemIcon = domFunctions.createImg("list-icon", object.icon, "16", "16");
    
        const span = document.createElement("span");
        span.textContent = object.title;
        
        const rightLi = domFunctions.createDiv(["right-li", object.type])

        const removeIcon = domFunctions.createImg(["remove-icon"], RemoveIcon, "16", "16");
        
        link.append(elemIcon, span);
        rightLi.appendChild(removeIcon);
        li.append(link, rightLi);
    
        return li;
    }
    
    function createTodoListElement(todo){
        const li = createListElement(todo);
        const rightLi = li.querySelector(".right-li.todo");
        const dateInput = domFunctions.createInput(["todo", "input-date"], "date", "date");
        rightLi.prepend(dateInput);
        return li
    }

    function createList(object) {
        const div = domFunctions.createDiv(["list", object.containType])
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
        const btn = domFunctions.createBtn(["add-btn", objectType, "active"], `Add ${objectType}`);
        const btnIcon = domFunctions.createImg([],AddIcon, "16", "16");
        btn.prepend(btnIcon);

        return btn;
    }

    function createAddPopup(addType){
        const div = domFunctions.createDiv(["add-popup", addType, "hidden"]);
        const input = domFunctions.createInput(["add-popup", "input-title"], "title", "text");
        const btnContainer = domFunctions.createDiv(["btn-container"])

        const addBtn = domFunctions.createBtn(["add-popup", "add-btn"], "Add");
        const cancelBtn = domFunctions.createBtn(["add-popup", "cancel-btn"], "Cancel");

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

    // function getElementBySelector(selector){
    //     return document.querySelector(selector);
    // }


    function selectObjectElement(object){
        const element = document.querySelector(`.${object.titleToClassName}.${object.type}`);
        const previousSelected = document.querySelector(`.selected.${object.type}`);
        if (previousSelected) previousSelected.classList.remove("selected");
        element.classList.add("selected");
    }

    function getListInterface(listContainer){
        const addBtn = listContainer.querySelector(`.add-btn`);
        const addPopup = listContainer.querySelector(".add-popup");
        const closePopupBtn = listContainer.querySelector(".add-popup .cancel-btn");
        const ul = listContainer.querySelector(`.list ul`);
        const addPopupBtn = listContainer.querySelector(".add-popup.add-btn");

        return {
            addBtn, addPopup, addPopupBtn, closePopupBtn, ul
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
        get inbox(){
            return document.querySelector(".cInbox.project")
        }
    };
}

export { createDomInterfacer };