import { createDomInterfacer } from "./dom-interfacer";

function createObjectManipulator(){
    const domInterfacer = createDomInterfacer();

    //remove objectList everywhere when objectList as object property added

    //remove projectStructurer when modules added
    function removeObject(object, objectList, projectStructurer){
        const objectElement = objectList.querySelector(`.${object.titleToClassName()}`);
        objectList.removeChild(objectElement);
        projectStructurer.remove(object);
    }

    //remove projectStructurer when modules added
    function createObject(inputForm, createFunction, projectStructurer) {
        const parameters = domInterfacer.collectInput(inputForm);
        const obj = createFunction(parameters);
        if (!projectStructurer.add(obj)) return;
        return obj
    }

    function addObject(object, objectList, setupFunction){
        try{
            const objectElement = object.liElement;
            setupFunction(object, objectElement, objectList);
            objectList.appendChild(objectElement);
        }
        catch {
            alert("Alredy exists!");
        }
    }

    return {
        createObject,
        addObject,
        removeObject,
    }
}

export { createObjectManipulator }