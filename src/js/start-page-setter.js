import "../styles/index.css"
import { eventListenerSetter } from "./event-listeners-setter"
import { startOfToday, startOfWeek, nextMonday } from 'date-fns'
import { domInterfacer } from "./dom-interfacer"
import { projectStructurer } from "./project-structurer"
import { storage } from "./storage"

function setStartPage() {
    if(localStorage.getItem("projects")) {
        //change to classes, create folders and done
        storage.populateContainer()
        resetProjectsList()
    }
    const dates = getDates()
    eventListenerSetter.setStartPageEventListeners(dates.today, dates.weekStart, dates.weekEnd)
    domInterfacer.inbox.click()
}

function resetProjectsList(){
    const div = domInterfacer.createProjectList(projectStructurer)
    const menu = domInterfacer.menu
    menu.removeChild(domInterfacer.projectList)
    menu.appendChild(div)
    domInterfacer.projectList = div
}

function getDates(){
    const today = startOfToday()
    const weekStart = startOfWeek(today, { weekStartsOn: 1 })
    const weekEnd = nextMonday(today)
    return { today, weekStart, weekEnd }
}

export { setStartPage }