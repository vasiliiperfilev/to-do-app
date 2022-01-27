import RemoveIcon from "../images/remove-task.png";
import AddIcon from "../images/add-icon.png";

function createDomInterfacer(){
    
    function createListElement(object){
        const li = document.createElement("li");
        li.classList.add(object.noSpaceTitle);
    
        const link = document.createElement("a");
        link.href = `#${object.noSpaceTitle}`;
    
        const elemIcon = document.createElement("img");
        elemIcon.classList.add("list-icon");
        elemIcon.src = object.icon;
        elemIcon.height = "16";
        elemIcon.width = "16";
    
        const span = document.createElement("span");
        span.textContent = object.title;
    
        const removeIcon = document.createElement("img");
        removeIcon.classList.add("remove-icon");
        removeIcon.src = RemoveIcon;
        removeIcon.height = "16";
        removeIcon.width = "16";
    
        link.appendChild(elemIcon);
        link.appendChild(span);
        li.appendChild(link);
        li.appendChild(removeIcon);
    
        return li;
    }


    function createList(object) {
        const div = document.createElement("div");
        const ul = document.createElement("ul");
        div.classList.add("list", object.containType);

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
        const btn = document.createElement("button");
        btn.classList.add("add-btn", objectType, "active");

        const btnIcon = document.createElement("img");
        btnIcon.src = AddIcon;
        btnIcon.height = "16";
        btnIcon.width = "16";

        const span = document.createElement("span");
        span.textContent = `Add ${objectType}`;
        btn.appendChild(btnIcon);
        btn.appendChild(span);

        return btn;
    }

    function createAddPopup(addType){
        const div = document.createElement("div");
        div.classList.add("add-popup", addType, "hidden");

        const input = document.createElement("input");
        input.name = "title";
        input.type = "text";

        const btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-container");

        const addBtn = document.createElement("button");
        addBtn.classList.add("add-btn-popup");
        addBtn.textContent = "Add";

        const cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancel-btn-popup");
        cancelBtn.textContent = "Cancel";

        btnContainer.appendChild(addBtn);
        btnContainer.appendChild(cancelBtn);
        div.appendChild(input);
        div.appendChild(btnContainer);

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

        content.appendChild(h1);
        content.appendChild(ul);
        content.appendChild(addBtn);
        content.appendChild(addPopup);

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

    function addClassToElement(selector, newClass){
        const elem = document.querySelector(selector);
        elem.classList.add(newClass);
    }

    function removeClassFromElement(selector, classToRemove){
        const elem = document.querySelector(selector);
        elem.classList.remove(classToRemove);
    }

    function showElement(element){
        element.classList.remove("hidden");
        element.classList.add("active");
    }

    function hideElement(element){
        element.classList.remove("active");
        element.classList.add("hidden");
    }

    function selectElement(element){
        const parent = element.parentElement;
        const previousSelected = parent.querySelector(".selected");
        if (previousSelected) previousSelected.classList.remove("selected");
        element.classList.add("selected");
    }

    return {
        createListElement,
        removeElementFromList,
        createProjectPage,
        collectInput,
        cleanInput,
        addClassToElement,
        removeClassFromElement,
        showElement,
        hideElement,
        selectElement
    };
}

export { createDomInterfacer };