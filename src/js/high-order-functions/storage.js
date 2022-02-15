import { projectStructurer } from "../classes/project-structurer-class";

const storage = (() => {
    function populateStorage(){
        const projects = {};
        Object.values(projectStructurer.container).forEach(project => {
            projects[project.title] = {};
            Object.values(project.container).forEach(todo => {
                projects[project.title][todo.title] = todo.allData;
            });
        });
        const stringProjects = JSON.stringify(projects);
        localStorage.setItem("projects", stringProjects);
    }

    return {
        populateStorage
    };
    
})()

export { storage };