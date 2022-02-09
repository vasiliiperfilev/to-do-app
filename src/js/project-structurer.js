import { createStructurer } from "./structurer"
import { createProject } from "./project-object"
import { todoController } from "./todo-controller"

const projectStructurer = (() => {
    const projects = {}
    const containType = "project"
    const proto = createStructurer(projects, containType)
    const inbox = createProject({
        "title": "Inbox"
    })
    proto.add(inbox)
    const activeProject = proto.getObjectByTitle(inbox.title)

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

    return Object.assign({}, proto, {
        get activeProject() {
            return activeProject
        },

        set activeProject(title){
            activeProject = proto.getObjectByTitle(title)
        },
        add,
        remove,
    })
})()

export { projectStructurer }