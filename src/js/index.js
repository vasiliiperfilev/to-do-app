import "../styles/index.css"
import { eventListenerSetter } from "./event-listeners-setter"
import { createProject } from "./project-object"
import { startOfToday, startOfWeek, nextMonday } from 'date-fns'
import { domInterfacer } from "./dom-interfacer"
import { projectStructurer } from "./project-structurer"
import { storage } from "./storage"

function setStartPage() {

    if(localStorage.getItem("projects")) {
        //reduce this and done
        storage.populateContainer()
        const newProjectUl = domInterfacer.createUl(projectStructurer)
        const div = domInterfacer.createDiv(["list", projectStructurer.containType])
        div.append(newProjectUl)
        div.querySelector(".cInbox").classList.add("hidden")
        const addBtn = domInterfacer.createAddBtn("project")
        const addPopup = domInterfacer.createAddPopup("project")
        const h2 = document.createElement("h2");
        h2.textContent = "Projects"
        const menu = document.querySelector(".menu")
        div.prepend(h2)
        div.append(addBtn, addPopup)
        menu.removeChild(domInterfacer.projectList)
        menu.appendChild(div)
        domInterfacer.projectList = div
    }

    const today = startOfToday()
    const weekStart = startOfWeek(today, { weekStartsOn: 1 })
    const weekEnd = nextMonday(today)

    eventListenerSetter.setListEventListeners(domInterfacer.projectList, createProject, eventListenerSetter.setProjectListeners)
    eventListenerSetter.setDateFilters(domInterfacer.thisWeek, projectStructurer.isInDateRange, weekStart, weekEnd)
    eventListenerSetter.setDateFilters(domInterfacer.today, projectStructurer.isOnDate, today)
    eventListenerSetter.setInbox(domInterfacer.inbox)

    domInterfacer.inbox.click()
}

setStartPage()