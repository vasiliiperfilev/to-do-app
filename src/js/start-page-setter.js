import "../styles/index.css";
import { eventListenerSetter } from "./event-listeners-setter";
import { startOfToday, startOfWeek, nextMonday } from 'date-fns';
import { domInterfacer } from "./dom-interfacer";
import { projectStructurer } from "./project-structurer";
import { controller } from "./controller";

function setStartPage() {
    if(localStorage.getItem("projects")) {
        controller.populateContainer();
        resetProjectsList();
    };
    const dates = getDates();
    eventListenerSetter.setStartPageEventListeners(dates.today, dates.weekStart, dates.weekEnd);
    domInterfacer.inbox.click();
}

function resetProjectsList(){
    projectStructurer.resetDomElement();
    const div = projectStructurer.domElement;
    const menu = domInterfacer.menu;
    menu.removeChild(domInterfacer.projectList);
    menu.appendChild(div);
    domInterfacer.projectList = div;
}

function getDates(){
    const today = startOfToday();
    const weekStart = startOfWeek(today, { weekStartsOn: 0 });
    const weekEnd = nextMonday(today);
    return { today, weekStart, weekEnd };
}

export { setStartPage };