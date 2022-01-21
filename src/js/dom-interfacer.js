import RemoveIcon from "../images/remove-task.png";

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

    function removeEleventFromList(object){
        const parent = document.querySelector(`.list.${object.type}`);
        const child = document.querySelector(`.list.${object.type} .${object.noSpaceTitle}`);
        parent.removeChild(child);
    }


    return {
        addElementToList,
        removeEleventFromList
    };
}

export { createDomInterfacer };