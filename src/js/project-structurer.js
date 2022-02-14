import { createStructurer } from "./structurer"
import { createProject } from "./project-object"
import { isAfter, isBefore, isSameDay, parseISO } from "date-fns";

const projectStructurer = (() => {
    const title = 'Projects'
    const containType = "project"
    const proto = createStructurer(containType)
    //default inbox project setup
    const inbox = createProject({"title": "Inbox"})
    proto.add(inbox)
    const activeProject = proto.container[inbox.title]

    function add(object){
        if (object.type !== containType){
            return this.activeProject.add(object)
        }
        else {
            return proto.add(object)
        }
    }

    function remove(object){
        if (object.type !== containType){
            return this.activeProject.remove(object)
        }
        else {
            return proto.remove(object)
        }
    }

    function filterTodos(filterFunction, ...args){
        const filteredContainer = {}
        Object.values(this.container).forEach(project => {
            const title = project.title
            const copyProject = createProject({title})
            Object.values(project.container).forEach(todo => {
                if (filterFunction.apply(todo, args)) copyProject.add(todo)
            })
            filteredContainer[copyProject.title] = copyProject
        })
        return filteredContainer 
    }

    function isInDateRange(startDate, endDate){
        const isoDate = parseISO(this.date)
        return isBefore(isoDate, endDate) && isAfter(isoDate, startDate)
    }

    function isOnDate(date){
        const isoDate = parseISO(this.date)
        return (isSameDay(isoDate, date))
    }

    return Object.assign({}, proto, {
        add,
        remove,
        filterTodos,
        isInDateRange,
        isOnDate,
        get activeProject() {
            return activeProject
        },
        set activeProject(project){
            activeProject = project
        },
        get title() {
            return title
        }
    })
})()

export { projectStructurer }