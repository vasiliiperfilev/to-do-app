import { createStructurer } from "./structurer";

function createProjectStructurer() {
    const projects = {};
    const proto = createStructurer(projects);
    const currentProject = null;

    return Object.assign({}, proto, {
        get currentProject() {
            return currentProject;
        },

        set currentProject(title){
            currentProject = proto.getObjectByTitle(title);
        }
    })
}