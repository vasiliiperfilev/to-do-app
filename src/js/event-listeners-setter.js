import { domInterfacer } from "./dom-interfacer";
import { ProjectStructurer, projectStructurer } from "./project-structurer";
import { Todo } from "./todo-object";
import { Project } from "./project-object";
import { setAddBtn, setClosePopupBtn, setDateInput, setRemoveIcon, 
    setTitle, setTitleInput, setPopupAddBtn, setTodoIcon, showAllTodoByFilter } from './event-listener-functions';

const eventListenerSetter = (() => {

    function setListEventListeners(listContainer, objClass, setupFunction) {
        const listInterface = domInterfacer.getListUiElements(listContainer);
        setAddBtn(listInterface);
        setClosePopupBtn(listInterface);
        setPopupAddBtn(listInterface, objClass, setupFunction);
    }

    function chooseProject() {
        const title = this.querySelector("span").textContent;
        projectStructurer.activeProject = projectStructurer.container[title];
        showActiveProject();
    }

    function showActiveProject(){
        const project = projectStructurer.activeProject;
        domInterfacer.selectObjectElement(project.domElement, "project");
        const projectPage = domInterfacer.createProjectPage(project);
        setListEventListeners(projectPage, Todo, setTodoListeners);
        domInterfacer.projectWindow.innerHTML = "";
        domInterfacer.projectWindow.appendChild(projectPage);
    }

    function setProjectListeners(project){
        setRemoveIcon(domInterfacer.getLiChildren(project.domElement).removeIcon, project);
        project.domElement.addEventListener("click", function(){
            chooseProject.call(this);
            showActiveProject();
        });
    }

    function setTodoListeners(todo){
        const liChildren = domInterfacer.getLiChildren(todo.domElement);
        setRemoveIcon(liChildren.removeIcon, todo);
        setTitle(liChildren.title, liChildren.titleInput, todo);
        setTitleInput(liChildren.title, liChildren.titleInput, todo);
        setTodoIcon(liChildren.itemIcon, todo);
        setDateInput(liChildren.dateInput, todo);
    }

    function setDateFilters(domElement, filterFunction, ...filterArgs){
        domElement.addEventListener("click", (event) => {
            domInterfacer.selectClosestProjectLi(event);
            showAllTodoByFilter(filterFunction, ...filterArgs);
        });
    }

    function setInbox(domElement){
        domElement.addEventListener("click", (event) => {
            chooseProject.call(domElement);
            domInterfacer.selectClosestProjectLi(event);
        });
    }

    function setStartPageEventListeners(today, weekStart, weekEnd){
        setListEventListeners(domInterfacer.projectList, Project, eventListenerSetter.setProjectListeners);
        setDateFilters(domInterfacer.thisWeek, ProjectStructurer.isInDateRange, weekStart, weekEnd);
        setDateFilters(domInterfacer.today, ProjectStructurer.isOnDate, today);
        setInbox(domInterfacer.inbox);
    }
    
    return {
        setListEventListeners,
        setProjectListeners,
        setTodoListeners,
        showAllTodoByFilter,
        setDateFilters,
        setInbox,
        setStartPageEventListeners
    };
})();

export { eventListenerSetter };