import { createStructurer } from "./structurer"
import { createProject } from "./project-object"

const projectStructurer = (() => {
    const containType = "project"
    const proto = createStructurer(containType)
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

    return Object.assign({}, proto, {
        add,
        remove,
        get activeProject() {
            return activeProject
        },
        set activeProject(title){
            activeProject = proto.container[title]
        },
    })
})()

export { projectStructurer }