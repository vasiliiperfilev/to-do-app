import { Project } from "./project-class";
import { domInterfacer } from "../dom/dom-interfacer";
import { isAfter, isBefore, isSameDay, parseISO } from "date-fns";
import { Todo } from "./todo-class";
import { eventListenerSetter } from "../event-listeners/event-listeners-setter";

class ProjectStructurer extends Project{
    static containClass = Project.name.toLowerCase();
    activeProject;

    constructor(parametersObject){
        super(parametersObject);
        this.createDomElement = domInterfacer.createProjectList;
        this.domElement = this.createDomElement(this);
    }

    get activeProject() {
        return this.activeProject;
    }
    set activeProject(project){
        this.activeProject = project;
    }

    add(object){
        if (object.constructor.name.toLowerCase() != ProjectStructurer.containClass){
            return this.activeProject.add(object);
        }
        else {
            return super.add(object);
        }
    }
    remove(object){
        if (object.constructor.name.toLowerCase() !== ProjectStructurer.containClass){
            return this.activeProject.remove(object);
        }
        else {
            return super.remove(object);
        }
    }

    filterTodos(filterFunction, ...args){
        const filteredContainer = {};
        Object.values(this.container).forEach(project => {
            const title = project.title;
            const copyProject = new Project({title});
            Object.values(project.container).forEach(todo => {
                if (filterFunction.apply(todo, args)) copyProject.add(todo);
            });
            filteredContainer[copyProject.title] = copyProject;
        });
        return filteredContainer;
    }

    static isInDateRange(startDate, endDate){
        const isoDate = parseISO(this.date);
        return isBefore(isoDate, endDate) && isAfter(isoDate, startDate);
    }

    static isOnDate(date){
        const isoDate = parseISO(this.date);
        return (isSameDay(isoDate, date));
    }
}

const projectStructurer = new ProjectStructurer({title: "Projects"});
const inbox = new Project({"title": "Inbox"});
projectStructurer.add(inbox);
projectStructurer.activeProject = inbox;

export { ProjectStructurer, projectStructurer };