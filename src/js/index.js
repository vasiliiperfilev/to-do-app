import "../styles/index.css";
import { createTodoItem } from "./todo-object";
import { createProject } from "./project-object";

const item = createTodoItem("some title", "some description", "2021/12/12", 2);
const project = createProject("some project");

const anotherItem = createTodoItem();
const anotherProject = createProject();

project.add(item);
project.add(item);
anotherProject.add(anotherItem);
item.title = "new title";
anotherProject.add(item);

console.log(project);
console.log(anotherProject.container);

anotherProject.remove(item);
console.log(anotherProject.container);
console.log(anotherProject.getObjectByTitle(item.title));
console.log(anotherProject.getObjectByTitle(anotherItem.title));