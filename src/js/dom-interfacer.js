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

    function addElementToList(object){
        const parent = document.querySelector(`.list.${object.type}`);
        parent.appendChild(createListElement(object));
    }

    function removeElementFromList(object){
        const parent = document.querySelector(`.list.${object.type}`);
        const child = document.querySelector(`.list.${object.type} .${object.noSpaceTitle}`);
        parent.removeChild(child);
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

    function createProjectPage(project) {
        const content = document.createElement("div");
        content.id = "content";
        const h1 = document.createElement("h1");
        h1.textContent = project.title;

        const ul = createList(project);
        const addBtn = createAddBtn("todo");

        content.appendChild(h1);
        content.appendChild(ul);
        content.appendChild(addBtn);

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

    return {
        addElementToList,
        removeElementFromList,
        createProjectPage,
        collectInput,
        addClassToElement,
        removeClassFromElement,
        showElement,
        hideElement
    };
}

export { createDomInterfacer };