import "../styles/index.css";
import { createTodoItem } from "./todo-item";
import { createProject } from "./project";

const item = createTodoItem("some title", "some description", "2021/12/12", 2);
const project = createProject("some project");

const anotherItem = createTodoItem();
const anotherProject = createProject();

project.add(item);
project.add(item);
anotherProject.add(anotherItem);
anotherProject.add(item);

console.log(project);
console.log(anotherProject.container);

anotherProject.remove(item);
console.log(anotherProject.container);
console.log(anotherProject.getObjectByTitle(item.title));
console.log(anotherProject.getObjectByTitle(anotherItem.title));