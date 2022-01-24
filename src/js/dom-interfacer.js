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
        elemIcon.classList.add("remove-icon");
        removeIcon.src = RemoveIcon;
        removeIcon.height = "16";
        removeIcon.width = "16";
    
        link.appendChild(elemIcon);
        link.appendChild(span);
        li.appendChild(link);
        li.appendChild(removeIcon);
    
        return li;
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
        btn.classList.add("add-btn", objectType);

        const btnIcon = document.createElement("img");
        btnIcon.src = AddIcon;
        btnIcon.height = "16";
        btnIcon.width = "16";

        btn.appendChild(btnIcon);
        btn.textContent = `Add ${objectType}`;

        return btn;
    }

    function createList(object) {
        const ul = document.createElement("ul");
        ul.classList.add("list", object.type);

        object.container.forEach(element => {
            createListElement(element);
            ul.appendChild(element);
        });

        return ul
    }

    function createProjectPage(project) {
        const content = document.createElement("div");
        content.id = "content";
        const h1 = document.createElement("h1");
        h1.textContent = project.title;

        const ul = createList(project);
        const addBtn = createAddBtn(project.type);

        content.appendChild(h1);
        content.appendChild(ul);
        content.appendChild(addBtn);
    }

    function collectInput(form){
        const parameters = {};
        const inputs = form.querySelectorAll("input");
        inputs.forEach(input => {
            parameters[input.name] = input.value;
        })

        return parameters
    }

    return {
        addElementToList,
        removeElementFromList,
        createProjectPage,
        collectInput
    };
}

export { createDomInterfacer };