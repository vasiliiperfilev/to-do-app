import "../styles/index.css";
import { createTodoItem } from "./todo-item";
import { createProject } from "./project";

const item = createTodoItem("some title", "some description", "2021/12/12", 2);
const project = createProject("some project");

const anotherItem = createTodoItem();
const anotherProject = createProject();

project.addTodo(item);
project.addTodo(item);
anotherProject.addTodo(anotherItem);
anotherProject.addTodo(item);

console.log(project.todoList);
console.log(anotherProject.todoList);

anotherProject.removeTodo(item);
console.log(anotherProject.todoList);