import { createStructurer } from "./structurer";
import { createProject } from "./project-object";

function createProjectStructurer() {
    const projects = {};
    const containType = "project";
    const proto = createStructurer(projects, containType);
     //create default projects
     const inbox = createProject({
        "title": "Inbox"
    });
    proto.add(inbox);
    const activeProject = proto.getObjectByTitle(inbox.title);

    function add(object){
        if (object.type !== containType){
            return this.activeProject.add(object);
        }
        else {
            return proto.add(object);
        }

    }

    return Object.assign({}, proto, {
        get activeProject() {
            return activeProject;
        },

        set activeProject(title){
            activeProject = proto.getObjectByTitle(title);
        },
        add
    });
}

export { createProjectStructurer };