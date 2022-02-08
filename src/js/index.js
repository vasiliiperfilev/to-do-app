import "../styles/index.css"
import { createProjectController } from "./project-controller"
import { listController } from "./list-controller"
import { createProject } from "./project-object"
import { startOfToday, startOfWeek, nextMonday } from 'date-fns'
import { domInterfacer } from "./dom-interfacer"
import { projectStructurer } from "./project-structurer"

function setStartPage() {
    const controller = createProjectController()

    if(localStorage.getItem("projects")) {
        projectStructurer.populateContainer()
    }

    listController.setListEventListeners(domInterfacer.projectList, createProject, controller.setProjectListeners)

    const today = startOfToday()
    domInterfacer.thisWeek.addEventListener("click", (event) => {
        const li = event.target.closest("li")
        domInterfacer.selectObjectElement(li, "project")
        controller.showAllTodoDateRange(startOfWeek(today, { weekStartsOn: 1 }), nextMonday(today))
    })
    domInterfacer.today.addEventListener("click", (event) => {
        const li = event.target.closest("li")
        domInterfacer.selectObjectElement(li, "project")
        controller.showAllTodoDateRange(today)
    })
    domInterfacer.inbox.addEventListener("click", (event) => {
        controller.chooseProject.call(domInterfacer.inbox)
        const li = event.target.closest("li")
        domInterfacer.selectObjectElement(li, "project")  
    })

    domInterfacer.inbox.click()
}

setStartPage()