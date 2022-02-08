import { domInterfacer } from "./dom-interfacer";
import { projectStructurer } from "./project-structurer";

const objectManipulator = (() => {

    //remove objectList everywhere when objectList as object property added

    function removeObject(object, objectList){
        const objectElement = objectList.querySelector(`.${object.titleToClassName()}.${object.type}`);
        objectList.removeChild(objectElement);
        projectStructurer.remove(object);
    }

    function createObject(inputForm, createFunction) {
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
})()

export { objectManipulator }