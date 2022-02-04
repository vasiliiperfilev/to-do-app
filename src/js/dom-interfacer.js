//start with creating modules as in phone note

import AddIcon from "../images/add-icon.png";
import { createDomListFunctions } from "./dom-list-functions";
import { createSelectorHolder } from "./selectorHolder";

function createDomInterfacer(){
    const selectors = createSelectorHolder();
    //rename to domfunctions
    const domListFunctions = createDomListFunctions();

    function createAddBtn(objectType) {
        const btn = domListFunctions.createBtn([selectors.addBtn, objectType, selectors.active], `Add ${objectType}`);
        const btnIcon = domListFunctions.createImg([],AddIcon, "16", "16");
        btn.prepend(btnIcon);
        return btn;
    }

    function createAddPopup(addType){
        const div = domListFunctions.createDiv([selectors.addPopup, addType, selectors.hidden]);
        const input = domListFunctions.createInput([selectors.addPopup, selectors.inputTitle], "title", "text");
        const btnContainer = domListFunctions.createDiv([selectors.btnContainer])
        const addBtn = domListFunctions.createBtn([selectors.addPopup, selectors.addBtn], "Add");
        const cancelBtn = domListFunctions.createBtn([selectors.addPopup, selectors.cancelBtn], "Cancel");
        btnContainer.append(addBtn, cancelBtn);
        div.append(input, btnContainer);
        return div
    }

    function createProjectPage(project) {
        const content = document.createElement("div");
        content.id = "content";
        const h1 = document.createElement("h1");
        h1.textContent = project.title;
        const ul = domListFunctions.createList(project);
        const addBtn = createAddBtn("todo");
        const addPopup = createAddPopup("todo");
        content.append(h1, ul, addBtn, addPopup);
        return content;
    }

    function createAllProjectsPage(projectStructurer){
        const content = document.createElement("div");
        content.id = "content";
        Object.values(projectStructurer.container).forEach((project) => {
            const h1 = document.createElement("h1");
            h1.textContent = project.title;
            const div = domListFunctions.createDiv([selectors.list, project.containType]);
            const ul = document.createElement("ul");
            Object.values(project.container).forEach(todo => {
                const li = todo.liElement;
                ul.append(li);
            })
            div.append(ul);
            content.append(h1,div);
        })
        return content;
    }

    function selectObjectElement(object){
        const element = document.querySelector(`.${object.titleToClassName()}.${object.type}`);
        const previousSelected = document.querySelector(`.${selectors.selected}.${object.type}`);
        if (previousSelected) previousSelected.classList.remove(`${selectors.selected}`);
        element.classList.add(`${selectors.selected}`);
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
        const liIcon = li.querySelector(`.${selectors.liIcon}`);
        const removeIcon = li.querySelector(`.${selectors.removeLiIcon}`);
        const dateInput = li.querySelector(`.${selectors.inputDate}`);
        const titleInput = li.querySelector(`.${selectors.inputTitle}`);
        const title = li.querySelector("span")
        return {
            liIcon, removeIcon, dateInput, titleInput, title
        }
    }

    return Object.assign({}, domListFunctions, {
        createProjectPage,
        createAllProjectsPage,
        selectObjectElement,
        getListInterface,
        getLiInterface,
        get inbox(){
            return document.querySelector(`.${selectors.inbox}.${selectors.project}`)
        }
    });
}

export { createDomInterfacer };