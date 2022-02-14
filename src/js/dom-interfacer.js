import AddIcon from "../images/add-icon.png"
import { createDomListFunctions } from "./dom-list-functions"
import { selectorHolder } from "./selectorHolder"

const domInterfacer = (() => {
    const domFunctions = createDomListFunctions()

    function createAddBtn(objectType) {
        const btn = domFunctions.createBtn([selectorHolder.addBtn, objectType, selectorHolder.active], `Add ${objectType}`)
        const btnIcon = domFunctions.createImg([],AddIcon, "16", "16")
        btn.prepend(btnIcon)
        return btn
    }

    function createAddPopup(addType){
        const div = domFunctions.createDiv([selectorHolder.addPopup, addType, selectorHolder.hidden])
        const input = domFunctions.createInput([selectorHolder.addPopup, selectorHolder.inputTitle], "title", "text")
        const btnContainer = domFunctions.createDiv([selectorHolder.btnContainer])
        const addBtn = domFunctions.createBtn([selectorHolder.addPopup, selectorHolder.addBtn], "Add")
        const cancelBtn = domFunctions.createBtn([selectorHolder.addPopup, selectorHolder.cancelBtn], "Cancel")
        btnContainer.append(addBtn, cancelBtn)
        div.append(input, btnContainer)
        return div
    }

    function createProjectDiv(project){
        const elements = domFunctions.createDivUlElements(project, "h1")
        const div = elements.div
        elements.header.classList.add(project.titleToClassName())
        elements.ul.classList.add(project.titleToClassName())
        return div
    }

    function addPopupInterface(div, addType){
        const addBtn = createAddBtn(`${addType}`)
        const addPopup = createAddPopup(`${addType}`)
        div.append(addBtn, addPopup)
    }
    
    function createProjectPage(project) {
        const div = createProjectDiv(project)
        addPopupInterface(div, selectorHolder.todo)
        return div
    }

    function createAllProjectsPage(projectsContainer){
        const content = domFunctions.createDiv(["all-projects"]);
        Object.values(projectsContainer).forEach((project) => {
            const div = createProjectDiv(project)
            if (div.querySelector("ul").childNodes.length > 0) content.append(div)
        })
        return content
    }

    function createProjectList(projectStructurer) {
        const div = domFunctions.createDivUlElements(projectStructurer, "h2").div
        addPopupInterface(div, selectorHolder.project)
        div.querySelector(`.${selectorHolder.inbox}`).classList.add(`${selectorHolder.hidden}`)
        return div
    }

    function selectObjectElement(element, elementType){
        const previousSelected = document.querySelector(`.${selectorHolder.selected}.${elementType}`)
        if (previousSelected) previousSelected.classList.remove(`${selectorHolder.selected}`)
        element.classList.add(`${selectorHolder.selected}`)
    }

    function selectClosestProjectLi(event){
        const li = event.target.closest("li")
        selectObjectElement(li, "project")
    }

    function getListUiElements(listContainer){
        const addBtn = listContainer.querySelector(`.${selectorHolder.addBtn}`)
        const addPopup = listContainer.querySelector(`.${selectorHolder.addPopup}`)
        const closePopupBtn = listContainer.querySelector(`.${selectorHolder.addPopup} .${selectorHolder.cancelBtn}`)
        const ul = listContainer.querySelector(`.${selectorHolder.list} ul`)
        const popupAddBtn = listContainer.querySelector(`.${selectorHolder.addPopup}.${selectorHolder.addBtn}`)
        return {
            addBtn, addPopup, popupAddBtn, closePopupBtn, ul
        }
    }

    return Object.assign({}, domFunctions, {
        createProjectPage,
        createAllProjectsPage,
        createProjectList,
        selectObjectElement,
        getListUiElements,
        selectClosestProjectLi,
        get inbox(){
            return document.querySelector(`.${selectorHolder.inbox}.${selectorHolder.project}`)
        },
        get today(){
            return document.querySelector(`.${selectorHolder.today}.${selectorHolder.project}`)
        },
        get thisWeek(){
            return document.querySelector(`.${selectorHolder.thisWeek}.${selectorHolder.project}`)
        },
        get projectList() {
            return document.querySelector(`.${selectorHolder.projectList}`)
        },
        get projectWindow() {
            return document.querySelector(`.${selectorHolder.projectWindow}`) 
        },
        get menu() {
            return document.querySelector(`.${selectorHolder.menu}`)
        },
        set projectList(projectList){
            this.projectList = projectList
        }
    })
})()

export { domInterfacer }