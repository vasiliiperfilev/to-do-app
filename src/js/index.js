import "../styles/index.css"
import { projectController } from "./project-controller"
import { listController } from "./list-controller"
import { createProject } from "./project-object"
import { startOfToday, startOfWeek, nextMonday } from 'date-fns'
import { domInterfacer } from "./dom-interfacer"
import { projectStructurer } from "./project-structurer"
import { storage } from "./storage"

function setStartPage() {

    if(localStorage.getItem("projects")) {
        storage.populateContainer()
        const newProjectList = domInterfacer.createList(projectStructurer)
        newProjectList.querySelector(".cInbox").classList.add("hidden")
        const addBtn = domInterfacer.createAddBtn("project")
        const addPopup = domInterfacer.createAddPopup("project")
        const h2 = document.createElement("h2");
        h2.textContent = "Projects"
        const menu = document.querySelector(".menu")
        newProjectList.prepend(h2)
        newProjectList.append(addBtn, addPopup)
        menu.removeChild(domInterfacer.projectList)
        menu.appendChild(newProjectList)
        domInterfacer.projectList = newProjectList
    }

    listController.setListEventListeners(domInterfacer.projectList, createProject, projectController.setProjectListeners)

    const today = startOfToday()
    domInterfacer.thisWeek.addEventListener("click", (event) => {
        const li = event.target.closest("li")
        domInterfacer.selectObjectElement(li, "project")
        projectController.showAllTodoDateRange(startOfWeek(today, { weekStartsOn: 1 }), nextMonday(today))
    })
    domInterfacer.today.addEventListener("click", (event) => {
        const li = event.target.closest("li")
        domInterfacer.selectObjectElement(li, "project")
        projectController.showAllTodoDateRange(today)
    })
    domInterfacer.inbox.addEventListener("click", (event) => {
        projectController.chooseProject.call(domInterfacer.inbox)
        const li = event.target.closest("li")
        domInterfacer.selectObjectElement(li, "project")  
    })

    domInterfacer.inbox.click()
}

setStartPage()