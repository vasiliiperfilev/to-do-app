import "../../styles/index.css";
import "../../styles/scrollBar.css";
import { eventListenerSetter } from "../event-listeners/event-listeners-setter";
import { startOfToday, startOfWeek, nextMonday } from 'date-fns';
import { domInterfacer } from "../dom/dom-interfacer";
import { projectStructurer } from "../classes/project-structurer-class";
import { controller } from "./controller";

function setStartPage() {
    controller.setProjectStructurer();
    resetProjectsList();
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