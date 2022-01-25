import { createStructurer } from "./structurer";

function createProjectStructurer() {
    const projects = {};
    const proto = createStructurer(projects, "project");
    const activeProject = null;

    return Object.assign({}, proto, {
        get activeProject() {
            return activeProject;
        },

        set activeProject(title){
            activeProject = proto.getObjectByTitle(title);
        }
    });
}

export { createProjectStructurer };