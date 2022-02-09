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

    function createProjectPage(project) {
        const content = document.createElement("div")
        content.id = "content"
        const h1 = document.createElement("h1")
        h1.textContent = project.title
        const ul = domFunctions.createList(project)
        const addBtn = createAddBtn("todo")
        const addPopup = createAddPopup("todo")
        content.append(h1, ul, addBtn, addPopup)
        return content
    }

    function createAllProjectsPage(projectStructurer){
        const content = document.createElement("div")
        content.id = "content"
        Object.values(projectStructurer.container).forEach((project) => {
            const h1 = document.createElement("h1")
            h1.textContent = project.title
            h1.classList.add(`${project.titleToClassName()}`)
            const div = domFunctions.createDiv([selectorHolder.list, project.containType])
            const ul = document.createElement("ul")
            ul.classList.add(`${project.titleToClassName()}`)
            Object.values(project.container).forEach(todo => {
                const li = todo.liElement
                ul.append(li)
            })
            div.append(ul)
            content.append(h1,div)
        })
        return content
    }

    function selectObjectElement(element, elementType){
        const previousSelected = document.querySelector(`.${selectorHolder.selected}.${elementType}`)
        if (previousSelected) previousSelected.classList.remove(`${selectorHolder.selected}`)
        element.classList.add(`${selectorHolder.selected}`)
    }

    function getListInterface(listContainer){
        const addBtn = listContainer.querySelector(`.${selectorHolder.addBtn}`)
        const addPopup = listContainer.querySelector(`.${selectorHolder.addPopup}`)
        const closePopupBtn = listContainer.querySelector(`.${selectorHolder.addPopup} .${selectorHolder.cancelBtn}`)
        const ul = listContainer.querySelector(`.${selectorHolder.list} ul`)
        const addPopupBtn = listContainer.querySelector(`.${selectorHolder.addPopup}.${selectorHolder.addBtn}`)
        return {
            addBtn, addPopup, addPopupBtn, closePopupBtn, ul
        }
    }

    function getLiInterface(li){
        const liIcon = li.querySelector(`.${selectorHolder.liIcon}`)
        const removeIcon = li.querySelector(`.${selectorHolder.removeLiIcon}`)
        const dateInput = li.querySelector(`.${selectorHolder.inputDate}`)
        const titleInput = li.querySelector(`.${selectorHolder.inputTitle}`)
        const title = li.querySelector("span")
        return {
            liIcon, removeIcon, dateInput, titleInput, title
        }
    }

    return Object.assign({}, domFunctions, {
        createProjectPage,
        createAddBtn,
        createAddPopup,
        createAllProjectsPage,
        selectObjectElement,
        getListInterface,
        getLiInterface,
        get inbox(){
            return document.querySelector(`.${selectorHolder.inbox}.${selectorHolder.project}`)
        },
        get today(){
            return document.querySelector(".cToday.project")
        },
        get thisWeek(){
            return document.querySelector(".cThis-week.project")
        },
        get projectList() {
            return document.querySelector(".list.project")
        },
        get projectWindow() {
            return document.querySelector(".content") 
        },
        set projectList(projectList){
            this.projectList = projectList
        }
    })
})()

export { domInterfacer }