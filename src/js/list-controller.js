import { domInterfacer } from "./dom-interfacer"
import { objectManipulator } from "./object-manipulator"

const listController = (() => {
    function setListEventListeners(listContainer, createFunction, setupFunction) {
        const listInterface = domInterfacer.getListUiElements(listContainer)
        listInterface.addBtn.addEventListener("click", () => {
            domInterfacer.cleanInput(listInterface.addPopup)
            domInterfacer.replaceElement(listInterface.addPopup, listInterface.addBtn)
            listInterface.addPopup.querySelector("input").focus()
        })

        listInterface.closePopupBtn.addEventListener("click",
            domInterfacer.replaceElement.bind(null, listInterface.addBtn, listInterface.addPopup))

        listInterface.addPopupBtn.addEventListener("click", () => {
            const object = objectManipulator.createObject(listInterface.addPopup, createFunction)
            objectManipulator.addObject(object, listInterface.ul, setupFunction)
            listInterface.closePopupBtn.click()
        })
    }
    
    return {
        setListEventListeners
    }
})()

export { listController }