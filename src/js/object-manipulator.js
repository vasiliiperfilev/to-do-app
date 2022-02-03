import { createDomInterfacer } from "./dom-interfacer";

function createObjectManipulator(){
    const domInterfacer = createDomInterfacer();

    function removeObject(object, objectList, objectContainer){
        const objectElement = objectList.querySelector(`.${object.titleToClassName}`);
        objectList.removeChild(objectElement);
        objectContainer.remove(object);
    }

    function createObject(inputForm, createFunction, projectStructurer) {
        const parameters = domInterfacer.collectInput(inputForm);
        const obj = createFunction(parameters);
        if (!projectStructurer.add(obj)) return;
        return obj
    }

    function addObject(object, objectList, setupFunction){
        // try{
            const objectElement = object.liElement;
            setupFunction(object, objectElement, objectList);
            objectList.appendChild(objectElement);
        // }
        // catch {
        //     alert("Alredy exists!");
        // }
    }

    return {
        createObject,
        addObject,
        removeObject,
    }
}

export { createObjectManipulator }