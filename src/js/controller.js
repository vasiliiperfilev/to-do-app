import { domInterfacer } from "./dom-interfacer"
import { projectStructurer } from "./project-structurer"
import { storage } from "./storage"

const controller = (() => {

    function removeObject(object, objectList){
        objectList.removeChild(object.liElement)
        projectStructurer.remove(object)
    }

    function createObject(inputForm, createFunction) {
        const parameters = domInterfacer.collectInput(inputForm)
        const obj = createFunction(parameters)
        if (!projectStructurer.add(obj)) return
        storage.populateStorage()
        return obj
    }

    function addObject(object, objectList, setupFunction){
        try{
            const objectElement = object.liElement
            setupFunction(object)
            objectList.appendChild(objectElement)
        }
        catch {
            alert("Alredy exists!")
        }
    }

    return {
        createObject,
        addObject,
        removeObject,
    }
})()

export { controller }