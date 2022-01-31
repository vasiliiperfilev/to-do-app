import RemoveIcon from "../images/remove-task.png";
import AddIcon from "../images/add-icon.png";

function createDomInterfacer(){
    
    function createDomElement(name, classes){
        const element = document.createElement(name);
        element.classList.add(...classes);
        return element;
    }

    function createDiv(classes){
        const div = createDomElement("div", classes);
        return div;
    }

    function createImg(classes, src, height, width){
        const img = createDomElement("img", classes);
        img.height = height;
        img.width = width;
        img.src = src;
        return img;
    }

    function createInput(classes, name, type){
        const input = createDomElement("input", classes);
        input.type = type;
        input.name = name;
        return input;
    }

    function createBtn(classes, textContent){
        const btn = createDomElement("button", classes);
        const span = document.createElement("span");
        span.textContent = textContent;
        btn.appendChild(span);
        return btn;
    }

    function createListElement(object){
        const li = document.createElement("li");
        li.classList.add(`c${object.noSpaceTitle}`, object.type);
    
        const link = document.createElement("a");
        link.href = `#c${object.noSpaceTitle}`;
        
        const elemIcon = createImg("list-icon", object.icon, "16", "16");
    
        const span = document.createElement("span");
        span.textContent = object.title;
        
        const rightLi = createDiv(["right-li", object.type])

        const removeIcon = createImg(["remove-icon"], RemoveIcon, "16", "16");
        
        link.append(elemIcon, span);
        rightLi.appendChild(removeIcon);
        li.append(link, rightLi);
    
        return li;
    }
    
    function createTodoListElement(todo){
        const li = createListElement(todo);
        const rightLi = li.querySelector(".right-li.todo");
        const dateInput = createInput(["todo", "input-date"], "date", "date");
        rightLi.prepend(dateInput);
        return li
    }

    function createList(object) {
        const div = createDiv(["list", object.containType])
        const ul = document.createElement("ul");

        for (const key in object.container) {
            const element = object.container[key];
            const li = createListElement(element);
            ul.appendChild(li);
        }

        div.appendChild(ul);
        return div
    }

    function removeElementFromList(selector, list){
        const child = list.querySelector(selector);
        list.removeChild(child);
    }

    function createAddBtn(objectType) {
        const btn = createBtn(["add-btn", objectType, "active"], `Add ${objectType}`);
        const btnIcon = createImg([],AddIcon, "16", "16");
        btn.prepend(btnIcon);

        return btn;
    }

    function createAddPopup(addType){
        const div = createDiv(["add-popup", addType, "hidden"]);
        const input = createInput(["add-popup", "input-title"], "title", "text");
        const btnContainer = createDiv(["btn-container"])

        const addBtn = createBtn(["add-popup", "add-btn"], "Add");
        const cancelBtn = createBtn(["add-popup", "cancel-btn"], "Cancel");

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

    function collectInput(form){
        const parameters = {};
        const inputs = form.querySelectorAll("input");
        inputs.forEach(input => {
            parameters[input.name] = input.value;
        })

        return parameters
    }

    function cleanInput(form){
        const inputs = form.querySelectorAll("input");
        inputs.forEach(input => {
            input.value = "";
        })
    }

    function getElementBySelector(selector){
        return document.querySelector(selector);
    }

    function showElement(element){
        element.classList.remove("hidden");
        element.classList.add("active");
    }

    function hideElement(element){
        element.classList.remove("active");
        element.classList.add("hidden");
    }

    function selectElement(object){
        const element = document.querySelector(`.c${object.noSpaceTitle}.${object.type}`);
        const previousSelected = document.querySelector(`.selected.${object.type}`);
        if (previousSelected) previousSelected.classList.remove("selected");
        element.classList.add("selected");
    }

    function getListInterface(listContainer, containType){
        const addBtn = listContainer.querySelector(`.add-btn`);
        const addPopup = listContainer.querySelector(".add-popup");
        const closePopupBtn = listContainer.querySelector(".add-popup .cancel-btn");
        const ul = listContainer.querySelector(`.list.${containType} ul`);
        const addPopupBtn = listContainer.querySelector(".add-popup.add-btn");

        return {
            addBtn, addPopup, addPopupBtn, closePopupBtn, ul
        }
    }

    return {
        createListElement,
        createTodoListElement,
        removeElementFromList,
        createProjectPage,
        collectInput,
        cleanInput,
        showElement,
        hideElement,
        selectElement,
        getListInterface,
        getElementBySelector
    };
}

export { createDomInterfacer };